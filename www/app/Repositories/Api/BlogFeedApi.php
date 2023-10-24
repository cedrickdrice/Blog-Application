<?php

namespace App\Repositories\Api;

use App\Constants\GuzzleConstant;
use App\Libraries\LibraryGuzzle;
use GuzzleHttp\Exception\GuzzleException;

/**
 * Class BlogFeedApi
 * @package App\Repositories\Api
 * @author  Jerome Palis <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 02. 15.
 */
class BlogFeedApi extends BaseApi
{
    /**
     * API: store feed
     */
    const STORE_FEED_SETTINGS = '/api/feeds/settings/store';

    /**
     * API: Update feed
     */
    const UPDATE_FEED_SETTINGS = '/api/feeds/settings/update';

    /**
     * API: Get Feed Detail
     */
    const GET_FEED_SETTINGS = '/api/feeds/settings/get';

    /**
     * BlogFeedApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        parent::__construct($oLibraryGuzzle);
    }

    /**
     * Get Feed Setting Detail
     * @param array $mRequest
     * @return array|string
     */
    public function getFeedSettingDetail(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::GET_FEED_SETTINGS;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_GET, $sUrl, $mRequest);
    }

    /**
     * Store
     * @param array $mRequest [consist of mall_id]
     * @return array|string
     * @throws GuzzleException
     */
    public function storeFeedSettings(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::STORE_FEED_SETTINGS;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_POST, $sUrl, $mRequest);
    }

    /** Update Feed settings
     * @param array $mRequest
     * @return array|string
     */
    public function updateFeedSettings(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::UPDATE_FEED_SETTINGS;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_PUT, $sUrl, $mRequest);
    }
}
