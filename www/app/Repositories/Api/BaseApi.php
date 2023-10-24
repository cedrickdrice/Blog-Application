<?php

namespace App\Repositories\Api;

use App\Libraries\LibraryGuzzle;

/**
 * Class BaseApi
 * @package App\Repositories\Api
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BaseApi
{
    /**
     * For the base api url
     * @var string $sApiBaseUrl
     */
    protected $sApiBaseUrl;

    /**
     * For the api path
     * @var string $sApiPath
     */
    protected $sApiPath;

    /**
     * guzzle library
     * @var LibraryGuzzle $oLibraryGuzzle
     */
    protected $oLibraryGuzzle;

    /**
     * BaseApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        $this->sApiBaseUrl = config('V2.API_ROUTE');
        $this->oLibraryGuzzle = $oLibraryGuzzle;
    }
}
