<?php

namespace App\Repositories\Api;

use App\Constants\ApiRouteConstant;
use App\Constants\GuzzleConstant;
use App\Libraries\LibraryGuzzle;
use GuzzleHttp\Exception\GuzzleException;

/**
 * Class BlogFeedDisplaySettingsApi
 * @package App\Repositories\Api
 * @author  Jerome Palis <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 02. 15.
 */
class BlogFeedDisplaySettingsApi extends BaseApi
{
    /**
     * API: store feed
     */
    const FEED_DISPLAY_STORE = '/api/feeds/settings/display/store';

    /**
     * Update Display Settings
     */
    const FEED_DISPLAY_UPDATE = '/api/feeds/settings/display/update';

    /**
     * BlogFeedDisplaySettingsApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        parent::__construct($oLibraryGuzzle);
    }

    /**
     * Store
     * @param array $mRequest [consist of mall_id]
     * @return array|string
     * @throws GuzzleException
     */
    public function storeDisplaySettings(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::FEED_DISPLAY_STORE;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_POST, $sUrl, $mRequest);
    }

    /**
     * Update Display Settings from feed settings
     * @param array $mRequest
     * @return array|string
     */
    public function updateDisplaySettings(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::FEED_DISPLAY_UPDATE;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_PUT, $sUrl, $mRequest);
    }
}
