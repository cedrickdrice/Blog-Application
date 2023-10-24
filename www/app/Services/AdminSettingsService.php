<?php
namespace App\Services;
use App\Constants\AdminSettingsConstant;
use App\Constants\Cafe24AuthConstant;
use App\Constants\Cafe24OAuthConstant;
use App\Constants\GuzzleConstant;
use App\Constants\ResponseConstant;
use App\Libraries\LibrarySession;
use App\Repositories\AdminRepository;

/**
 * Class AdminSettingsService
 * @package App\Services
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class AdminSettingsService extends BaseService
{
    /**
     * Admin Repository
     * @var AdminRepository $oAdminRepository
     */
    private $oAdminRepository;

    /**
     * OAuth Service
     * @var Cafe24OAuthService $oAuthService
     */
    private $oAuthService;

    /**
     * AdminSettingsService constructor.
     * @param AdminRepository    $oRepository
     * @param Cafe24OAuthService $oAuthService
     * @param LibrarySession     $oLibrarySession
     */
    public function __construct(AdminRepository $oRepository, Cafe24OAuthService $oAuthService, LibrarySession $oLibrarySession)
    {
        $this->oAdminRepository = $oRepository;
        $this->oAuthService = $oAuthService;
        $this->oLibrarySession = $oLibrarySession;
    }

    /**
     * Set Admin Settings to Api Service
     * @return array|bool
     */
    public function setAdminSettings()
    {
        $oCheckResponse = $this->checkAdminSettings();
        if ($oCheckResponse !== false) {
            return $oCheckResponse;
        }

        $this->storeAdminSettings();

        return $this->checkAdminSettings();
    }

    /**
     * Check if mall settings exist
     * @return array|bool
     */
    private function checkAdminSettings()
    {
        $oCheckResponse = $this->getAdminSettingsByMallID();
        return ($oCheckResponse !== false);
    }

    /**
     * Get Admin Setting By mall Id
     * @return array|mixed|string
     */
    public function getAdminSettingsByMallID()
    {
        $aCurrentMallID = $this->oLibrarySession->getSession(Cafe24OAuthConstant::MALL_ID);
        $aResponse = $this->oAdminRepository->getAdminSettingsByMallId($aCurrentMallID);
        if (isset($aResponse[ResponseConstant::DATA]) === true) {
            return $aResponse[ResponseConstant::DATA];
        }

        return false;
    }

    /**
     * Store admin settings
     * @return array|string
     */
    public function storeAdminSettings()
    {
        $aSession = $this->oLibrarySession->getMultipleSession([Cafe24OAuthConstant::MALL_ID, Cafe24OAuthConstant::SHOP_NO, GuzzleConstant::ACCESS_TOKEN_KEY]);
        $mShopDetail = $this->getStoreName($aSession);

        if (array_key_exists(ResponseConstant::CODE_RESULT, $mShopDetail) === true) {
            $this->oAuthService->doRefreshAccessToken($aSession[GuzzleConstant::ACCESS_TOKEN_KEY]);
            $mShopDetail = $this->getStoreName($aSession);
        }

        return $this->oAdminRepository->createAdminSettings([
            AdminSettingsConstant::MALL_ID => $aSession[AdminSettingsConstant::MALL_ID]]);
    }

    /**
     * Request current store name on Shops API
     * @param $aSession (Mall ID, Shop No, Access token key)
     * @return mixed
     */
    public function getStoreName(array $aSession)
    {
        $aMallData = $this->getMallAccessToken($aSession[GuzzleConstant::ACCESS_TOKEN_KEY]);
        if ($aMallData === false) {
            return false;
        }
        return $this->oAdminRepository->getShopDetailFromAPI($aMallData, $aSession[Cafe24OAuthConstant::SHOP_NO]);
    }

    /**
     * Get Mall Access Token from Redis
     * @param string $aSessionTokenKey
     * @return false|mixed
     */
    public function getMallAccessToken(string $sSessionTokenKey)
    {
        $aMallToken = $this->oAdminRepository->getMallTokens($sSessionTokenKey);
        return ($aMallToken !== false) ? json_decode($aMallToken, true) : $aMallToken;
    }

}
