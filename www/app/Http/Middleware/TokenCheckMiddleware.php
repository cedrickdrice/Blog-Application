<?php

namespace App\Http\Middleware;

use App\Constants\Cafe24OAuthConstant;
use App\Constants\BaseConstant;
use App\Constants\GuzzleConstant;
use App\Constants\ResponseConstant;
use App\Libraries\LibrarySession;
use App\Services\AdminSettingsService;
use App\Services\Cafe24OAuthService;
use Carbon\Carbon;
use Closure;
use Illuminate\Http\Request;

/**
 * Validate user token if valid
 * Class TokenCheckMiddleware
 * @package App\Http\Middleware
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class TokenCheckMiddleware
{
    /**
     * Admin Service
     * @var AdminSettingsService $oAdminSettingsService
     */
    private $oAdminSettingsService;

    /**
     * Auth Service
     * @var Cafe24OAuthService $oAuthService
     */
    private $oAuthService;

    /**
     * Carbon object
     * @var Carbon $oCarbon
     */
    private $oCarbon;

    /**
     * Library Session variable
     * @var LibrarySession $oLibrarySession
     */
    protected $oLibrarySession;

    /**
     * TokenCheckMiddleware constructor.
     * @param AdminSettingsService $AdminSettingsService
     * @param Cafe24OAuthService   $oAuthService
     * @param LibrarySession       $oLibrarySession
     * @param Carbon               $oCarbon
     */
    public function __construct(AdminSettingsService $AdminSettingsService, Cafe24OAuthService $oAuthService, LibrarySession $oLibrarySession, Carbon $oCarbon)
    {
        $this->oAdminSettingsService = $AdminSettingsService;
        $this->oAuthService = $oAuthService;
        $this->oLibrarySession = $oLibrarySession;
        $this->oCarbon = $oCarbon;
    }

    /**
     * Handles incoming request
     * @param Request $oRequest
     * @param Closure $oNext
     * @return mixed
     * @throws \Exception
     */
    public function handle(Request $oRequest, Closure $oNext)
    {
        $aSessionData = $this->oLibrarySession->getMultipleSession([
            Cafe24OAuthConstant::MALL_ID,
            Cafe24OAuthConstant::SHOP_NO,
            GuzzleConstant::ACCESS_TOKEN_KEY
        ]);
        $bIsValidToken = $this->verifyAccessToken($aSessionData);
        if ($bIsValidToken === false) {
            $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::AUTH_KEYS);
            abort(ResponseConstant::FAILED_VALIDATION_CODE, 'Token Expired');
        }

        return $oNext($oRequest);
    }

    /**
     * verify Access Token if valid
     * @param array $aSessionData
     * @return mixed
     * @throws \Exception
     */
    public function verifyAccessToken(array $aSessionData)
    {
        $mShopDetail = $this->oAdminSettingsService->getStoreName($aSessionData);
        if ($mShopDetail === false) {
            return false;
        }

        if (array_key_exists(ResponseConstant::CODE_RESULT, $mShopDetail) === true) {
            $mTokenRedisKey = $this->oAuthService->doRefreshAccessToken($aSessionData[GuzzleConstant::ACCESS_TOKEN_KEY]);
            if (is_string($mTokenRedisKey) === false) {
                abort(ResponseConstant::FAILED_VALIDATION_CODE, 'Token Expired');
            }
            $mShopDetail = $this->oAdminSettingsService->getStoreName($aSessionData);
        }

        $aSessionToken = $this->oAdminSettingsService->getMallAccessToken($aSessionData[GuzzleConstant::ACCESS_TOKEN_KEY]);
        $bTokenNearExpiry = $this->checkTokenExpiration($aSessionToken[Cafe24OAuthConstant::TOKEN_EXPIRES_AT]);
        if ($bTokenNearExpiry === true) {
            $this->oAuthService->doRefreshAccessToken($aSessionData[GuzzleConstant::ACCESS_TOKEN_KEY]);
        }
        return $mShopDetail;
    }

    /**
     * Check if token is near expiry (less than 10 mins)
     * @param string $sTokenExpiryData
     * @return bool
     * @throws \Exception
     */
    private function checkTokenExpiration(string $sTokenExpiryData)
    {
        $oCurrentDateTime = $this->oCarbon::now(BaseConstant::TIMEZONE_UTC);
        $oTokenExpiry = $this->oCarbon::parse($sTokenExpiryData)->tz(BaseConstant::TIMEZONE_UTC);
        $iDiffMinutes = $oCurrentDateTime->diffInMinutes($oTokenExpiry, false);
        return ($iDiffMinutes < BaseConstant::VALUE_TEN_MINUTE) ? true : false;
    }
}
