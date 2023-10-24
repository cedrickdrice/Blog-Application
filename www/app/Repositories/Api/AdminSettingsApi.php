<?php
namespace App\Repositories\Api;

use App\Constants\ApiRouteConstant;
use App\Constants\BaseConstant;
use App\Constants\GuzzleConstant;
use App\Constants\RoutesConstant;
use App\Libraries\LibraryGuzzle;
use \GuzzleHttp\Exception\GuzzleException;

/**
 * Class AdminSettingsApi
 * @package App\Repositories\Api
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class AdminSettingsApi extends BaseApi
{
    /**
     * API: Get Admin settings
     */
    const ADMIN_SETTINGS_GET_MALL = '/mall';

    /**
     * API: Create admin settings
     */
    const ADMIN_SETTINGS_CREATE = '/create';

    /**
     * AdminSettingsApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        parent::__construct($oLibraryGuzzle);
        $this->sApiPath = ApiRouteConstant::ADMIN_SETTINGS_ROUTE;
    }

    /**
     * Create new admin settings
     * @param array $mRequest [consist of mall_id]
     * @return array|string
     * @throws GuzzleException
     */
    public function createAdminSettings(array $mRequest)
    {
        $sUrl = $this->sApiBaseUrl . $this->sApiPath . self:: ADMIN_SETTINGS_CREATE;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_POST, $sUrl, $mRequest);
    }

    /**
     * Get admin settings by mall id
     * @param string $sMallId
     * @return array|string
     * @throws GuzzleException
     */
    public function getAdminSettingsByMallId(string $sMallId)
    {
        $sUrl = $this->sApiBaseUrl . $this->sApiPath . self::ADMIN_SETTINGS_GET_MALL . RoutesConstant::URL_SEPARATOR . $sMallId;
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_GET, $sUrl, BaseConstant::VALUE_EMPTY_ARRAY);
    }
}
