<?php

namespace App\Repositories;

use App\Repositories\Api\BlogFeedApi;
use App\Repositories\Api\BlogFeedDisplaySettingsApi;
use App\Repositories\Api\BlogFeedStyleSettingsApi;
use GuzzleHttp\Exception\GuzzleException;

/**
 * Class BlogFeedSettingsRepository
 * @package App\Repositories
 * @author  Jerome Palis <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 02. 15.
 */
class BlogFeedSettingsRepository extends BaseRepository
{
    /**
     * @var BlogFeedApi
     * BlogFeedApi Instance
     */
    private $oBlogFeedApi;

    /**
     * @var BlogFeedDisplaySettingsApi
     * BlogFeedDisplaySettingsApi Instance
     */
    private $oBlogFeedDisplaySettingsApi;

    /**
     * @var BlogFeedStyleSettingsApi
     * BlogFeedStyleSettingsApi Instance
     */
    private $oBlogFeedStyleSettingsApi;

    /**
     * BlogFeedSettingsRepository constructor.
     * instantiates BlogFeedStyleSettingsApi and BlogFeedDisplaySettingsApi
     * @param BlogFeedApi $oBlogFeedApi
     * @param BlogFeedDisplaySettingsApi $oBlogFeedDisplaySettingsApi
     * @param BlogFeedStyleSettingsApi   $oBlogFeedStyleSettingsApi
     */
    public function __construct(BlogFeedApi $oBlogFeedApi, BlogFeedDisplaySettingsApi $oBlogFeedDisplaySettingsApi, BlogFeedStyleSettingsApi $oBlogFeedStyleSettingsApi)
    {
        $this->oBlogFeedApi = $oBlogFeedApi;
        $this->oBlogFeedDisplaySettingsApi = $oBlogFeedDisplaySettingsApi;
        $this->oBlogFeedStyleSettingsApi = $oBlogFeedStyleSettingsApi;
    }

    /**
     * Get a Feed Setting Detail from API
     * @param $aRequestParameter
     * @return array|string
     */
    public function getFeedSettingsDetail($aRequestParameter)
    {
        try {
            return $this->oBlogFeedApi->getFeedSettingDetail($aRequestParameter);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * Store
     * invokes BlogFeedApi store
     * @param array $mData
     * @return string
     */
    public function storeFeedSettings($mData)
    {
        try {
            return $this->oBlogFeedApi->storeFeedSettings($mData);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * Update Feed Settings
     * @param array $mData
     * @return array
     */
    public function updateFeedSettings(array $mData)
    {
        try {
            return $this->oBlogFeedApi->updateFeedSettings($mData);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * storeDisplaySettings
     * invokes BlogFeedDisplaySettings APi store and saves feed display settings
     * @param array $mData
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function storeDisplaySettings(array $mData)
    {
        return $this->oBlogFeedDisplaySettingsApi->storeDisplaySettings($mData);
    }

    /**
     * Update Feed Settings
     * @param array $mData
     * @return array
     */
    public function updateDisplaySettings(array $mData)
    {
        try {
            return $this->oBlogFeedDisplaySettingsApi->updateDisplaySettings($mData);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * storeStyleSettings
     * invokes BlogFeedStyleSettingsApi store and save feed style settings
     * @param array $mData
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function storeStyleSettings(array $mData)
    {
        return $this->oBlogFeedStyleSettingsApi->storeStyleSetting($mData);
    }

    /**
     * Update Feed Settings
     * @param array $mData
     * @return array
     */
    public function updateStyleSettings(array $mData)
    {
        try {
            return $this->oBlogFeedStyleSettingsApi->updateStyleSetting($mData);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }
}
