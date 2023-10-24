<?php
namespace App\Http\Controllers\Admin;

use App\Constants\BlogFeedModelConstant;
use App\Constants\Cafe24OAuthConstant;
use App\Constants\FeedSettingsConstant;
use App\Constants\FeedStyleSettingsConstant;
use App\Constants\ResponseConstant;
use App\Http\Requests\Admin\GetFeedSettingsRequest;
use App\Http\Requests\Admin\StoreFeedSettingsRequest;
use App\Http\Requests\Admin\UpdateFeedSettingsRequest;
use App\Libraries\Auxiliary\LibraryAssetManager;
use App\Libraries\LibraryResponse;
use App\Services\AdminSettingsService;
use App\Services\BlogFeedSettingsService;
use App\Services\Cafe24OAuthService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class BlogFeedSettingsController
 * @package App\Http\Controllers\Admin
 * @author  Cedrick Drice <cedrick.drice@gmail.com>
 * @version 1.0
 * @since   2023. 10. 18.
 */
class BlogFeedSettingsController extends AdminBaseController
{
    /**
     * @var $oCafe24OAuthService
     * instantiates Cafe24OAuthService
     */
    private $oCafe24OAuthService;

    /**
     * @var AdminSettingsService
     * instantiates BlogFeedSettingsService
     */
    private $oAdminSettingsService;

    /**
     * BlogFeedSettingsController constructor.
     * instantiates AdminSettingsService
     * @param AdminSettingsService $oAdminSettingsService, BlogFeedSettingsService $oBlogFeedSettingsService, Cafe24OAuthService $oCafe24OAuthService, LibraryAssetManager $oAsset
     */
    public function __construct(AdminSettingsService $oAdminSettingsService, BlogFeedSettingsService $oBlogFeedSettingsService, Cafe24OAuthService $oCafe24OAuthService, LibraryAssetManager $oAsset)
    {
        $this->oAsset = $oAsset;
        $this->oAdminSettingsService = $oAdminSettingsService;
        $this->oService = $oBlogFeedSettingsService;
        $this->oCafe24OAuthService = $oCafe24OAuthService;
    }

    /**
     * [Type: View] Display blog settings
     * @return mixed
     */
    public function displayBlogFeedSettings()
    {
        $this->setBlogSettings();
        return $this->view('blog.settings');
    }

    /**
     * [Type: JSON Response] Get Feed Settings by Feed No
     * @param GetFeedSettingsRequest $oRequest
     * @return JsonResponse array|boolean (false)
     */
    public function getFeedDetail(GetFeedSettingsRequest $oRequest)
    {
        $iFeedNo = $oRequest[FeedSettingsConstant::FEED_NO];
        $aAdminSettings = $this->oAdminSettingsService->getAdminSettingsByMallID();
        $iAdminNo = $aAdminSettings[FeedSettingsConstant::ADMIN_NO];
        $aFeedDetail = $this->oService->getFeedDetail($iFeedNo, $iAdminNo, $aAdminSettings[Cafe24OAuthConstant::MALL_ID]);
        if (isset($aFeedDetail[LibraryResponse::MESSAGE]) === true) {
            return $this->errorBadRequestResponse($aFeedDetail[LibraryResponse::MESSAGE]);
        }
        return LibraryResponse::successDataResponse($aFeedDetail);
    }

    /**
     * [Type: JSON Response] Get Parsed Feed by Feed No
     * @param GetFeedSettingsRequest $oRequest
     * @return JsonResponse array|boolean (false)
     */
    public function getRssFeed(GetFeedSettingsRequest $oRequest)
    {
        $iFeedNo = $oRequest[FeedSettingsConstant::FEED_NO];
        $aAdminSettings = $this->oAdminSettingsService->getAdminSettingsByMallID();
        $iAdminNo = $aAdminSettings[FeedSettingsConstant::ADMIN_NO];
        $aFeedDetail = $this->oService->getParsedRssFeed($iFeedNo, $iAdminNo, $aAdminSettings[Cafe24OAuthConstant::MALL_ID]);
        return ($aFeedDetail !== false) ? LibraryResponse::successDataResponse($aFeedDetail) : LibraryResponse::noDataResponse();
    }

    /**
     * [Type: JSON Response] Invokes StoreFeedDisplaySettings, storeFeedStyleSettings and save feed settings
     * @param StoreFeedSettingsRequest $oStoreFeedSettingsRequest
     * @return JsonResponse array|boolean (false)
     */
    public function storeFeed(StoreFeedSettingsRequest $oStoreFeedSettingsRequest)
    {
        $oFeedSettingsRequest = $oStoreFeedSettingsRequest->validated();
        $aAdminSettings = $this->oAdminSettingsService->getAdminSettingsByMallID();

        //Store Display Settings on API
        $aInsertFeedDisplaySettingsResult = $this->oService->storeDisplaySettings($oFeedSettingsRequest[FeedSettingsConstant::DISPLAY], $aAdminSettings[Cafe24OAuthConstant::MALL_ID]);
        if ($aInsertFeedDisplaySettingsResult[ResponseConstant::RESULT] === LibraryResponse::FAIL) {
            return $this->errorBadRequestResponse($aInsertFeedDisplaySettingsResult[LibraryResponse::MESSAGE]);
        }

        //Store Feed Settings on API
        $aInsertFeedDisplayResult = $aInsertFeedDisplaySettingsResult[ResponseConstant::DATA];
        $iFeedDisplaySettingsNo = $aInsertFeedDisplayResult[FeedSettingsConstant::KEY_INSERTED][FeedSettingsConstant::DISPLAY_NO];
        $aInsertFeedSettingsResult = $this->oService->storeFeedSettings($oFeedSettingsRequest, $iFeedDisplaySettingsNo, $aAdminSettings[FeedSettingsConstant::ADMIN_NO]);
        if ($aInsertFeedSettingsResult[ResponseConstant::RESULT] === LibraryResponse::FAIL) {
            return $this->errorBadRequestResponse($aInsertFeedSettingsResult[LibraryResponse::MESSAGE]);
        }

        //Store Style Settings on API
        $aInsertFeedResult = $aInsertFeedSettingsResult[ResponseConstant::DATA];
        $iFeedStyleSettingsNo = $aInsertFeedResult[LibraryResponse::KEY_INSERTED][FeedSettingsConstant::FEED_NO];
        $aStoreFeedStyleSettings = $this->oService->storeStyleSettings($oFeedSettingsRequest[FeedSettingsConstant::STYLES], $iFeedStyleSettingsNo);
        if ($aStoreFeedStyleSettings[ResponseConstant::RESULT] === LibraryResponse::FAIL) {
            return $this->errorBadRequestResponse($aStoreFeedStyleSettings[LibraryResponse::MESSAGE]);
        }

        return LibraryResponse::successDataResponse([
            FeedSettingsConstant::DISPLAY   => $aInsertFeedDisplaySettingsResult[ResponseConstant::DATA],
            FeedSettingsConstant::FEED      => $aInsertFeedSettingsResult[ResponseConstant::DATA],
            FeedSettingsConstant::STYLES    => $aStoreFeedStyleSettings[ResponseConstant::DATA]
        ]);
    }

    /**
     * [Type: JSON Response] Update Feed Settings
     * @param UpdateFeedSettingsRequest $oRequest
     * @return JsonResponse
     */
    public function updateFeedSettings(UpdateFeedSettingsRequest $oRequest)
    {
        $oUpdateFeedSettingsRequest = $oRequest->validated();
        $iFeedNo = $oUpdateFeedSettingsRequest[FeedSettingsConstant::FEED_NO];
        $aAdminSettings = $this->oAdminSettingsService->getAdminSettingsByMallID();
        $aUpdateFeedSettingsReturn = $this->oService->updateFeedSettings($iFeedNo, $aAdminSettings[FeedSettingsConstant::ADMIN_NO], $oUpdateFeedSettingsRequest);
        if ($aUpdateFeedSettingsReturn[ResponseConstant::RESULT] === LibraryResponse::FAIL) {
            return $this->errorBadRequestResponse($aUpdateFeedSettingsReturn[LibraryResponse::MESSAGE]);
        }
        return LibraryResponse::successDataResponse([
            FeedSettingsConstant::DISPLAY   => $aUpdateFeedSettingsReturn[FeedSettingsConstant::DISPLAY],
            FeedSettingsConstant::FEED      => $aUpdateFeedSettingsReturn[FeedSettingsConstant::FEED],
            FeedSettingsConstant::STYLES    => $aUpdateFeedSettingsReturn[FeedSettingsConstant::STYLES]
        ]);
    }

    /**
     * [Type: JSON Response] returns lists of shops
     * @return JsonResponse array|boolean (false)
     */
    public function getShops()
    {
        $aOAuthSession = $this->oCafe24OAuthService->checkAuthSession();
        if (isset($aOAuthSession[ResponseConstant::RESULT]) === false || $aOAuthSession[ResponseConstant::RESULT] === false) {
            return LibraryResponse::errorResponse('Session Expired', LibraryResponse::FAILED_VALIDATION_CODE);
        }
        return LibraryResponse::successDataResponse($this->oService->getShops($aOAuthSession[ResponseConstant::RESULT]));
    }

    /**
     * [Type: JSON Response] returns lists of shops
     * @return JsonResponse
     */
    public function getBlogProviderList()
    {
        $aBlogProviderList = $this->oService->getBlogProviderList();
        if (isset($aBlogProviderList[ResponseConstant::RESULT]) === false || $aBlogProviderList[ResponseConstant::RESULT] === ResponseConstant::SUCCESS) {
            return LibraryResponse::successDataResponse($aBlogProviderList[ResponseConstant::DATA]);
        }
        return LibraryResponse::noDataResponse();
    }

    /**
     * errorResponse
     * returns json error response
     * @param $sErrorMessage
     * @return JsonResponse
     */
    private function errorResponse($sErrorMessage)
    {
        return LibraryResponse::errorResponse($sErrorMessage, LibraryResponse::BAD_REQUEST);
    }
}
