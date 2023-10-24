<?php

namespace App\Services;

use App\Constants\AdminSettingsConstant;
use App\Constants\Cafe24OAuthConstant;
use App\Constants\FeedDisplaySettingsConstant;
use App\Constants\FeedSettingsConstant;
use App\Constants\FeedStyleSettingsConstant;
use App\Constants\GuzzleConstant;
use App\Constants\ResponseConstant;
use App\Libraries\LibraryDateTime;
use App\Libraries\LibraryResponse;
use App\Libraries\LibrarySession;
use App\Repositories\Api\BloggingSiteApi;
use App\Repositories\Api\ShopsApi;
use App\Repositories\BlogFeedSettingsRepository;
use App\Repositories\RedisRepository;
use GuzzleHttp\Exception\GuzzleException;
use willvincent\Feeds\Facades\FeedsFacade;

/**
 * Class BlogFeedSettingsService
 * @package App\Services;
 * @author  Jerome Palis <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 02. 15.
 */
class BlogFeedSettingsService extends BaseService
{
    /**
     * BlogFeedSettingsRepository Instance
     * @var BlogFeedSettingsRepository
     */
    private $oBlogFeedSettingsRepository;

    /**
     * @var $oBloggingSiteApi
     * BloggingSiteApi instance
     */
    private $oBloggingSiteApi;

    /**
     * @var $oShopApi
     * ShopApi instance
     */
    private $oShopsApi;

    /**
     * @var $oRedisRepository
     * RedisRepository Instance
     */
    private $oRedisRepository;

    /**
     * @var string cache key
     */
    const KEY_CACHE = 'blog_app:%s:feed_no_%d';

    /**
     * Instantiates BlogFeedRepository and BlogFeedSettingsRepository
     * BlogFeedSettingsService constructor.
     * @param BlogFeedSettingsRepository $oBlogFeedSettingsRepository
     * @param BloggingSiteApi $oBloggingSiteApi
     * @param ShopsApi $oShopsApi
     * @param RedisRepository $oRedisRepository
     */
    public function __construct(BlogFeedSettingsRepository $oBlogFeedSettingsRepository, BloggingSiteApi $oBloggingSiteApi, ShopsApi $oShopsApi, RedisRepository $oRedisRepository, LibrarySession $oLibrarySession)
    {
        $this->oBlogFeedSettingsRepository = $oBlogFeedSettingsRepository;
        $this->oBloggingSiteApi = $oBloggingSiteApi;
        $this->oShopsApi = $oShopsApi;
        $this->oRedisRepository = $oRedisRepository;
        $this->oLibrarySession = $oLibrarySession;
    }

    /**
     * Get Feed Detail from FeedSetting Detail API
     * @param int $iFeedNo
     * @param int $iAdminNo
     * @return mixed|string
     */
    public function getFeedDetail(int $iFeedNo, int $iAdminNo, string $sMallId)
    {
        $sCacheKey = $this->getCacheKey($sMallId, $iFeedNo);
        //$aCachedData = $this->oRedisRepository->getCachedFeedData($sCacheKey);
        //if (empty($aCachedData) === false) {
        //    return $aCachedData;
        //}

        $aRequestParameter = array(
            FeedSettingsConstant::FEED_NO  => $iFeedNo,
            FeedSettingsConstant::ADMIN_NO => $iAdminNo,
        );
        $oFeedSettingsReturn = $this->oBlogFeedSettingsRepository->getFeedSettingsDetail($aRequestParameter);
        if (isset($oFeedSettingsReturn[LibraryResponse::RESULT]) === true && $oFeedSettingsReturn[LibraryResponse::RESULT] === LibraryResponse::SUCCESS) {
            $this->oRedisRepository->makeBlogFeedCache($sCacheKey, $oFeedSettingsReturn[LibraryResponse::DATA]);
            return $oFeedSettingsReturn[LibraryResponse::DATA];
        }
        return json_decode($oFeedSettingsReturn[ResponseConstant::MESSAGE], true);
    }

    /**
     * Get Feed Detail and parsed the rss feed
     * @param int $iFeedNo
     * @param int $iAdminNo
     * @param string $sMallId
     * @return array|false
     */
    public function getParsedRssFeed(int $iFeedNo, int $iAdminNo, string $sMallId)
    {
        $aFeedSettings = $this->getFeedDetail($iFeedNo, $iAdminNo, $sMallId);
        $sFeedUrl = $aFeedSettings[FeedSettingsConstant::FEED][FeedSettingsConstant::FEED_URL];
        if (strlen(trim($sFeedUrl)) === 0) {
            return false;
        }

        $aFeedBlogSite = $aFeedSettings[FeedSettingsConstant::BLOGGING_SITE];
        $iShopNo = $aFeedSettings[FeedSettingsConstant::FEED][Cafe24OAuthConstant::SHOP_NO];
        $sFeedUrl = ($aFeedBlogSite['preview_url_parameters'] !== null) ? $sFeedUrl . '?' . $aFeedBlogSite['preview_url_parameters'] : $sFeedUrl;
        $oRssFeeder = FeedsFacade::make($sFeedUrl);
        if ($oRssFeeder->error() !== null) {
            return false;
        }

        return $this->extractFeedFromRss($oRssFeeder, $iShopNo);
    }

    /**
     * Extract Feed from rss url using willvincent
     * @param object $oRssFeeder
     * @param int $iShopNo
     * @return array
     */
    private function extractFeedFromRss($oRssFeeder, int $iShopNo)
    {
        $oParsedRssFeed[FeedSettingsConstant::FEED] = [];
        //Get Author Detail
        $oParsedRssFeed['author'] = array(
            'medium' => $oRssFeeder->get_link(),
            'image' => $oRssFeeder->get_image_url()
        );

        $aSession = $this->oLibrarySession->getMultipleSession([Cafe24OAuthConstant::MALL_ID, Cafe24OAuthConstant::SHOP_NO, GuzzleConstant::ACCESS_TOKEN_KEY]);
        $aShops = $this->getShopDetail($aSession, $iShopNo);
        if (isset($aShops['shop']) === false) {
            $aShops['shop'] = array(
                'date_format' => 'YYYY-MM-DD',
                'time_format' => 'hh:mm:ss'
            );
        }
        $aShopDetail = array(
            'date_format' => LibraryDateTime::reformatDate($aShops['shop']['date_format']),
            'time_format' => LibraryDateTime::reformatTime($aShops['shop']['time_format'])
        );

        //Extract Feed details
        foreach ($oRssFeeder->get_items() as $feed) {
            $oParsedRssFeed[FeedSettingsConstant::FEED][] = array(
                'title'         => $feed->get_title(),
                'description'   => strip_tags($feed->get_content()),
                'link'          => $feed->get_link(),
                'categories'    => $feed->get_categories(),
                'author'        => $feed->get_author(),
                'date'          => $feed->get_date($aShopDetail['date_format'] . ' ' . $aShopDetail['time_format']),
            );
        }
        return $oParsedRssFeed;
    }

    /**
     * invokes BlogFeedRepository store
     * @param array $oFeedSettingsRequest
     * @param int $iFeedDisplaySettingsNo
     * @param int $iAdminNo
     * @return mixed|string
     */
    public function storeFeedSettings(array $oFeedSettingsRequest, int $iFeedDisplaySettingsNo, int $iAdminNo)
    {
        $aFeedRequest = $oFeedSettingsRequest[FeedSettingsConstant::FEED];
        $mData = [
            FeedSettingsConstant::ADMIN_NO                  => $iAdminNo,
            Cafe24OAuthConstant::SHOP_NO                    => $aFeedRequest[Cafe24OAuthConstant::SHOP_NO],
            AdminSettingsConstant::STORE_NAME               => $aFeedRequest[AdminSettingsConstant::STORE_NAME],
            FeedSettingsConstant::BLOGGING_SITE_NO          => $aFeedRequest[FeedSettingsConstant::BLOGGING_SITE_NO],
            FeedSettingsConstant::FEED_DISPLAY_SETTING_NO   => $iFeedDisplaySettingsNo,
            FeedSettingsConstant::LOCATION_SELECTOR_NO      => $aFeedRequest[FeedSettingsConstant::LOCATION_SELECTOR_NO],
            FeedSettingsConstant::FEED_SETTINGS             => $aFeedRequest
        ];
        $oFeedSettingsReturn = $this->oBlogFeedSettingsRepository->storeFeedSettings($mData);
        if (isset($oFeedSettingsReturn[LibraryResponse::RESULT]) === true && $oFeedSettingsReturn[LibraryResponse::RESULT] === LibraryResponse::SUCCESS) {
            return $oFeedSettingsReturn;
        }
        return json_decode($oFeedSettingsReturn[ResponseConstant::MESSAGE], true);
    }

    /**
     * storeDisplaySettings
     * invokes BlogFeedSettingsRepository storeDisplaySettings
     * @param array $mData
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function storeDisplaySettings(array $oDisplaySettingsRequest, string $iMallId)
    {
        $oDisplaySettingsRequest[Cafe24OAuthConstant::MALL_ID] = $iMallId;
        $oDisplaySettingsReturn = $this->oBlogFeedSettingsRepository->storeDisplaySettings($oDisplaySettingsRequest);
        if (isset($oDisplaySettingsReturn[LibraryResponse::RESULT]) === true && $oDisplaySettingsReturn[LibraryResponse::RESULT] === LibraryResponse::SUCCESS) {
            return $oDisplaySettingsReturn;
        }
        return json_decode($oDisplaySettingsReturn[ResponseConstant::MESSAGE], true);
    }

    /**
     * storeStyleSettings
     * Invokes BlogFeedSettingsRepository storeStyleSettings
     * @param array $mData
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function storeStyleSettings(array $aFeedStyleSettings, int $iFeedNo)
    {
        foreach($aFeedStyleSettings as &$aStyleSetting) {
            $aStyleSetting[FeedSettingsConstant::FEED_NO] = $iFeedNo;
            if ($aStyleSetting[FeedStyleSettingsConstant::FONT_SIZE] === FeedStyleSettingsConstant::DEFAULT_VALUE) {
                $aStyleSetting[FeedStyleSettingsConstant::FONT_SIZE] = FeedStyleSettingsConstant::DEFAULT_FONT_SIZE;
            }
        }
        $aStyleSettingParameter[FeedSettingsConstant::STYLES] = $aFeedStyleSettings;
        $oStylesSettingsReturn = $this->oBlogFeedSettingsRepository->storeStyleSettings($aStyleSettingParameter);
        if (isset($oStylesSettingsReturn[LibraryResponse::RESULT]) === true && $oStylesSettingsReturn[LibraryResponse::RESULT] === LibraryResponse::SUCCESS) {
            return $oStylesSettingsReturn;
        }
        return json_decode($oStylesSettingsReturn[ResponseConstant::MESSAGE], true);
    }

    /**
     * Update Feed Settings
     * @param int $iFeedNo
     * @param int $iAdminNo
     * @param array $aUpdateFeedSettings
     * @return array
     */
    public function updateFeedSettings(int $iFeedNo, int $iAdminNo, array $aUpdateFeedSettings)
    {
        $aFeedSettingsParams = $aUpdateFeedSettings[FeedSettingsConstant::FEED];
        $aDisplaySettingsParams = $aUpdateFeedSettings[FeedSettingsConstant::DISPLAY];
        $aStyleSettingsParams[FeedSettingsConstant::STYLES] = $aUpdateFeedSettings[FeedSettingsConstant::STYLES];

        $aFeedSettingsParams[FeedSettingsConstant::FEED_NO] = $iFeedNo;
        $aFeedSettingsParams[FeedSettingsConstant::ADMIN_NO] = $iAdminNo;
        $aFeedSettingsParams[FeedSettingsConstant::FEED_DISPLAY_SETTING_NO] = $aDisplaySettingsParams[FeedDisplaySettingsConstant::DISPLAY_NO];
        $aUpdateFeedSettingsReturn = $this->oBlogFeedSettingsRepository->updateFeedSettings($aFeedSettingsParams);
        if (isset($aUpdateFeedSettingsReturn[ResponseConstant::CODE_RESULT]) === true && $aUpdateFeedSettingsReturn[ResponseConstant::CODE_RESULT] === ResponseConstant::INVALID_PARAMETER_REQUEST) {
            return $this->returnUpdateErrorMsg(FeedSettingsConstant::FEED, $aUpdateFeedSettingsReturn);
        }

        $aDisplaySettingsParams[FeedSettingsConstant::FEED_NO] = $iFeedNo;
        $aDisplaySettingsParams[FeedSettingsConstant::ADMIN_NO] = $iAdminNo;
        $aUpdateDisplaySettingsReturn = $this->oBlogFeedSettingsRepository->updateDisplaySettings($aDisplaySettingsParams);
        if (isset($aUpdateDisplaySettingsReturn[ResponseConstant::CODE_RESULT]) === true && $aUpdateDisplaySettingsReturn[ResponseConstant::CODE_RESULT] === ResponseConstant::INVALID_PARAMETER_REQUEST) {
            return $this->returnUpdateErrorMsg(FeedSettingsConstant::DISPLAY, $aUpdateDisplaySettingsReturn);
        }

        $aStyleSettingsParams[FeedSettingsConstant::ADMIN_NO] = $iAdminNo;
        $aUpdateStyleSettingsReturn = $this->callUpdateStyleSettings($iFeedNo, $aStyleSettingsParams);
        if (isset($aUpdateStyleSettingsReturn[ResponseConstant::CODE_RESULT]) === true && $aUpdateStyleSettingsReturn[ResponseConstant::CODE_RESULT] === ResponseConstant::INVALID_PARAMETER_REQUEST) {
            return $this->returnUpdateErrorMsg(FeedSettingsConstant::STYLES, $aUpdateStyleSettingsReturn);
        }

        return [
            ResponseConstant::RESULT        => ResponseConstant::SUCCESS,
            FeedSettingsConstant::DISPLAY   => $aUpdateFeedSettingsReturn[ResponseConstant::DATA],
            FeedSettingsConstant::FEED      => $aUpdateDisplaySettingsReturn[ResponseConstant::DATA],
            FeedSettingsConstant::STYLES    => $aUpdateStyleSettingsReturn[ResponseConstant::DATA]
        ];
    }

    /**
     * Update Every style settings from request
     * @param int $iFeedNo
     * @param array $aStyleSettingsParams
     * @return array
     */
    public function callUpdateStyleSettings(int $iFeedNo, array $aStyleSettingsParams)
    {
        foreach($aStyleSettingsParams[FeedSettingsConstant::STYLES] as &$aStyleSetting) {
            $aStyleSetting[FeedSettingsConstant::FEED_NO] = $iFeedNo;
            if ($aStyleSetting[FeedStyleSettingsConstant::FONT_SIZE] === FeedStyleSettingsConstant::DEFAULT_VALUE) {
                $aStyleSetting[FeedStyleSettingsConstant::FONT_SIZE] = FeedStyleSettingsConstant::DEFAULT_FONT_SIZE;
            }
        }
        return $this->oBlogFeedSettingsRepository->updateStyleSettings($aStyleSettingsParams);
    }

    private function returnUpdateErrorMsg($sIndex, $aReturn)
    {
        $aReturnResponse = json_decode($aReturn[ResponseConstant::MESSAGE], true);
        return array(
            ResponseConstant::RESULT    => $aReturnResponse[ResponseConstant::RESULT],
            ResponseConstant::MESSAGE   => array(
                $sIndex => $aReturnResponse[ResponseConstant::MESSAGE]
            )
        );
    }

    /**
     * getShops
     * returns list of mall shops
     * @param $aOAuthSession
     * @return array|string
     */
    public function getShops($aOAuthSession)
    {
        $sMallId = $aOAuthSession[Cafe24OAuthConstant::MALL_ID];
        $sAccessTokenKey = $this->oRedisRepository->getTokenData($aOAuthSession[GuzzleConstant::ACCESS_TOKEN_KEY]);
        $sAccessToken = json_decode($sAccessTokenKey, true);
        try {
            return $this->oShopsApi->getShops($sMallId, $sAccessToken[Cafe24OAuthConstant::ACCESS_TOKEN_KEY]);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * getShops
     * returns list of mall shops
     * @param $aOAuthSession
     * @return array|string
     */
    public function getShopDetail($aOAuthSession, $iShopNo)
    {
        $sAccessTokenKey = $this->oRedisRepository->getTokenData($aOAuthSession[GuzzleConstant::ACCESS_TOKEN_KEY]);
        $sAccessToken = json_decode($sAccessTokenKey, true);
        try {
            return $this->oShopsApi->getShopDetail($sAccessToken, $iShopNo);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }


    /**
     * Retrieve blogging list provider from api
     * @return array|string
     */
    public function getBlogProviderList()
    {
        try {
            return $this->oBloggingSiteApi->getBloggingSiteListAPI();
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * make the cache key
     * @param string $sMallId
     * @param int $iFeedNo
     * @return string
     */
    private function getCacheKey(string $sMallId, int $iFeedNo)
    {
        return sprintf(self::KEY_CACHE, $sMallId, $iFeedNo);
    }
}
