<?php

namespace App\Repositories;

use App\Constants\ResponseConstant;
use App\Libraries\LibraryRedis;
use App\Repositories\Api\AdminSettingsApi;
use App\Repositories\Api\ShopsApi;
use GuzzleHttp\Exception\GuzzleException;

/**
 * Handles Admin Settings API calls
 * Class AdminRepository
 * @package App\Repositories
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 01. 13.
 */
class AdminRepository extends BaseRepository
{
    /**
     * @var AdminSettingsApi $oAdminSettingApi
     */
    private $oAdminSettingApi;

    /**
     * @var ShopsApi $oShopsApi
     */
    private $oShopsApi;

    /**
     * AdminRepository constructor.
     * @param LibraryRedis     $oLibraryRedis
     * @param AdminSettingsApi $oAdminSettingApi
     * @param ShopsApi         $oShopsApi
     */
    public function __construct(LibraryRedis $oLibraryRedis, AdminSettingsApi $oAdminSettingApi, ShopsApi $oShopsApi)
    {
        parent::__construct($oLibraryRedis);
        $this->oAdminSettingApi = $oAdminSettingApi;
        $this->oShopsApi = $oShopsApi;
    }

    /**
     * Create initial admin setting in db
     * @param $mData
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function createAdminSettings($mData)
    {
        try {
            return $this->oAdminSettingApi->createAdminSettings($mData);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * Get admin setting from db using Mall ID
     * @param string $sMallId
     * @return array|string
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getAdminSettingsByMallId(string $sMallId)
    {
        try {
            return $this->oAdminSettingApi->getAdminSettingsByMallId($sMallId);
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    /**
     * Get mall access token
     * @param $sRedisTableKey
     * @return bool|mixed
     */
    public function getMallTokens(string $sRedisTableKey)
    {
        $this->oLibraryRedis->setTable($sRedisTableKey);
        $bExisting = $this->oLibraryRedis->checkRecordExistence();
        return $bExisting === true ? $this->oLibraryRedis->get() : false;
    }

    /**
     * Get Shop Detail from Cafe24 Shops API
     * @param $aMallData
     * @param $iShopNo
     * @return array|mixed|string
     */
    public function getShopDetailFromAPI(array $aMallData, int $iShopNo)
    {
        try {
            $aResponse = $this->oShopsApi->getShopDetail($aMallData, $iShopNo);
            if (array_key_exists(ResponseConstant::CODE_RESULT, $aResponse) === true) {
                return $aResponse;
            }
            return $aResponse['shop'];
        } catch (GuzzleException $oException) {
            return $oException->getMessage();
        }
    }

    public function getAdminNo()
    {

    }
}
