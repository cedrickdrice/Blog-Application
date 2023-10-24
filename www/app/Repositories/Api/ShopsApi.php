<?php

namespace App\Repositories\Api;

use App\Constants\AdminSettingsConstant;
use App\Constants\Cafe24OAuthConstant;
use App\Constants\BaseConstant;
use App\Constants\GuzzleConstant;
use App\Constants\RoutesConstant;
use App\Libraries\LibraryGuzzle;

/**
 * Class ShopsApi
 * @package App\Repositories\Api
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class ShopsApi extends BaseApi
{
    /**
     * ShopsApi constructor.
     * @param LibraryGuzzle $oLibraryGuzzle
     */
    public function __construct(LibraryGuzzle $oLibraryGuzzle)
    {
        parent::__construct($oLibraryGuzzle);
    }

    /**
     * @title V2x Get Multishop info
     * @description get multishop details
     * @param array $aMallData
     * @param int $iShopNo
     * @return array|string
     *
     * @definition(s) :
     * GET /api/v2/admin/shops/{shop_no}
     *
     * @documentation(s) :
     * https://developer.web_app.com/docs/intra/api/admin/#shops
     *
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getShopDetail(array $aMallData, int $iShopNo)
    {
        $sEndPoint = Cafe24OAuthConstant::GET_SHOPS_API_ENDPOINT . RoutesConstant::URL_SEPARATOR . $iShopNo;
        $sUri = sprintf(RoutesConstant::WEB_API_URI, $aMallData[AdminSettingsConstant::MALL_ID], $sEndPoint);
        $aHeaders = [
            GuzzleConstant::HEADER_AUTHORIZATION    => sprintf(GuzzleConstant::BEARER, $aMallData[Cafe24OAuthConstant::ACCESS_TOKEN_KEY])
        ];
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_GET, $sUri, BaseConstant::VALUE_EMPTY_ARRAY, $aHeaders);
    }

    public function getShops($sMallId, $sAccessToken)
    {
        $sEndPoint = Cafe24OAuthConstant::GET_SHOPS_API_ENDPOINT;
        $sUri = sprintf(RoutesConstant::WEB_API_URI, $sMallId, $sEndPoint);
        $aHeaders = [
            GuzzleConstant::HEADER_AUTHORIZATION    => sprintf(GuzzleConstant::BEARER,  $sAccessToken)
        ];
        return $this->oLibraryGuzzle->request(GuzzleConstant::METHOD_GET, $sUri, BaseConstant::VALUE_EMPTY_ARRAY, $aHeaders);
    }
}
