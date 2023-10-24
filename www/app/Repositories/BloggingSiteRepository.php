<?php

namespace App\Repositories;

use App\Libraries\LibraryRedis;
use App\Repositories\Api\BloggingSiteApi;
use GuzzleHttp\Exception\GuzzleException;

/**
 * Class BloggingSiteRepository
 * @package App\Repositories
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BloggingSiteRepository extends BaseRepository
{
    /**
     * @var BloggingSiteApi $oBloggingSiteApi
     */
    private $oBloggingSiteApi;

    /**
     * AdminRepository constructor.
     * @param LibraryRedis     $oLibraryRedis
     * @param BloggingSiteApi $oBloggingSiteApi
     */
    public function __construct(LibraryRedis $oLibraryRedis, BloggingSiteApi $oBloggingSiteApi)
    {
        parent::__construct($oLibraryRedis);
        $this->oBloggingSiteApi = $oBloggingSiteApi;
    }

    /**
     * Get blogging site list from API
     * @param string $sMallId
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getBloggingSiteList()
    {
        try {
            return $this->oBloggingSiteApi->getBloggingSiteList();
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }
}
