<?php

namespace App\Repositories\Api;

use App\Constants\BaseConstant;
use App\Constants\GuzzleConstant;
use App\Libraries\LibraryGuzzle;

/**
 * Class BloggingSiteApi
 * @package App\Repositories\Api
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BloggingSiteApi extends BaseApi
{
    /**
     * API: Retrieve list
     */
    const BLOGGING_SITE_LIST = '/list';

    /**
     * AdminSettingsApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        parent::__construct($oLibraryGuzzle);
        $this->sApiPath = '/api/feeds/provider';
    }

    /**
     * Retrieve blogging site provider list
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getBloggingSiteListAPI()
    {
        $sUrl = $this->sApiBaseUrl . $this->sApiPath . self::BLOGGING_SITE_LIST;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_GET, $sUrl, BaseConstant::VALUE_EMPTY_ARRAY);
    }
}
