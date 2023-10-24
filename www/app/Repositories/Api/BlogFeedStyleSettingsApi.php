<?php

namespace App\Repositories\Api;

use App\Constants\GuzzleConstant;
use App\Libraries\LibraryGuzzle;
use GuzzleHttp\Exception\GuzzleException;

/**
 * Class BlogFeedStyleSettingsApi
 * @package App\Repositories\Api
 * @author  Jerome Palis <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 02. 15.
 */
class BlogFeedStyleSettingsApi extends BaseApi
{
    /**
     * API: store feed
     */
    const FEED_STYLE_STORE = '/api/feeds/settings/style/store';

    /**
     * Update Style settings
     */
    const FEED_STYLE_UPDATE = '/api/feeds/settings/style/update';

    /**
     * BlogFeedStyleSettingsApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        parent::__construct($oLibraryGuzzle);
    }

    /**
     * Store Feed
     * @param array $mRequest [consist of mall_id]
     * @return array|string
     * @throws GuzzleException
     */
    public function storeStyleSetting(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::FEED_STYLE_STORE;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_POST, $sUrl, $mRequest);
    }

    /**
     * Update Style settings
     * @param array $mRequest
     * @return array|string
     */
    public function updateStyleSetting(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . self::FEED_STYLE_UPDATE;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_PUT, $sUrl, $mRequest);
    }
}
