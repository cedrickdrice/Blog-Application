<?php

namespace App\Services;

use App\Constants\Cafe24OAuthConstant;
use App\Constants\GuzzleConstant;
use App\Constants\ResponseConstant;
use App\Libraries\LibrarySession;
use App\Repositories\RedisRepository;
use Cafe24ph\OAuth2\Client\Provider\Cafe24;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;

/**
 * Class Cafe24OAuthService
 * @package App\Services
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class Cafe24OAuthService extends BaseService
{
    /**
     * Redis Repository
     * @var $oRedisRepository
     */
    private $oRedisRepository;

    /**
     * Apps Credentials
     * @var array
     */
    private $oCredentials;

    /**
     * Cafe24OAuthService constructor.
     * @param RedisRepository $oRedisRepository
     * @param LibrarySession  $oLibrarySession
     */
    public function __construct(RedisRepository $oRedisRepository, LibrarySession $oLibrarySession)
    {
        $this->oRedisRepository = $oRedisRepository;
        $this->oLibrarySession = $oLibrarySession;
        $this->oCredentials = [
            Cafe24OAuthConstant::CLIENT_ID_KEY        => config('V2.app_key'),
            Cafe24OAuthConstant::CLIENT_SECRET_KEY    => config('V2.app_secret'),
            Cafe24OAuthConstant::REDIRECT_URI_KEY     => config('V2.callback_url')
        ];
    }

    /**
     * Check required parameters for auth
     * @param array $aAuthParameters
     * @return bool|string
     */
    public function checkAuth(array $aAuthParameters)
    {
        $bHasRequiredKeys  = $this->oLibrarySession->checkMultipleSessionExist(Cafe24OAuthConstant::AUTH_KEYS);
        if ($bHasRequiredKeys === true) {
            $aSessionData = $this->oLibrarySession->getMultipleSession(Cafe24OAuthConstant::AUTH_KEYS);
            return ($this->compareAuthSession($aAuthParameters, $aSessionData) === false) ? $this->destroySession() : $this->redirectToAdmin();
        }
        if ($this->checkUserValidity($aAuthParameters) === false) {
            return $this->destroySession();
        }
        $this->saveSession($aAuthParameters);
        return true;
    }

    /**
     * compare auth  Session
     * @param array $aAuthParameters
     * @param array $aSessionData
     * @return bool
     */
    private function compareAuthSession(array $aAuthParameters, array $aSessionData)
    {
        if ($aAuthParameters[Cafe24OAuthConstant::MALL_ID] !== $aSessionData[Cafe24OAuthConstant::MALL_ID] ||
            $aAuthParameters[Cafe24OAuthConstant::USER_ID] !== $aSessionData[Cafe24OAuthConstant::USER_ID] ||
            $aAuthParameters[Cafe24OAuthConstant::USER_TYPE] !== $aSessionData[Cafe24OAuthConstant::USER_TYPE]) {
            return false;
        }
        return true;
    }

    public function checkAuthSession()
    {
        $aSession = $this->oLibrarySession->getMultipleSession([Cafe24OAuthConstant::MALL_ID, Cafe24OAuthConstant::SHOP_NO, GuzzleConstant::ACCESS_TOKEN_KEY]);
        if($aSession[Cafe24OAuthConstant::MALL_ID] !== null && $aSession[Cafe24OAuthConstant::SHOP_NO] !== null && $aSession[GuzzleConstant::ACCESS_TOKEN_KEY] !== null) {
            return [ResponseConstant::RESULT => $aSession];
        }

        return [ResponseConstant::RESULT => false];
    }

    /**
     * Check if user type is valid
     * @param array|null $aData
     * @return bool
     */
    private function checkUserValidity(array $aData = null)
    {
        $aParams = $this->oLibrarySession->getMultipleSession(Cafe24OAuthConstant::AUTH_KEYS);
        if ($aData !== null) {
            $aParams = $aData;
        }
        return in_array(strtoupper($aParams[Cafe24OAuthConstant::USER_TYPE]), Cafe24OAuthConstant::USER_TYPES) === true;
    }


    /**
     * destroy current session
     */
    private function destroySession()
    {
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::MALL_ID);
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::USER_ID);
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::USER_TYPE);
        $this->oLibrarySession->destroySession();
        return false;
    }

    /**
     * get string for settings page
     * @return string
     */
    private function redirectToAdmin()
    {
        return ResponseConstant::ROUTE_ADMIN_PAGE;
    }

    /**
     * Save mall parameters to session
     * @param array $aAuthParameters
     */
    private function saveSession(array $aAuthParameters)
    {
        $this->oLibrarySession->insertMultipleSession([
            Cafe24OAuthConstant::MALL_ID     => $aAuthParameters[Cafe24OAuthConstant::MALL_ID],
            Cafe24OAuthConstant::USER_ID     => $aAuthParameters[Cafe24OAuthConstant::USER_ID],
            Cafe24OAuthConstant::USER_TYPE   => $aAuthParameters[Cafe24OAuthConstant::USER_TYPE],
            Cafe24OAuthConstant::SHOP_NO     => $aAuthParameters[Cafe24OAuthConstant::SHOP_NO],
        ]);
    }

    /**
     * Includes web_app auth parameters based on web_appOauth requirements
     * @param array $aRequestParameters
     * @return array
     */
    public function setParameters(array $aRequestParameters)
    {
        $sMallId = array_key_exists(Cafe24OAuthConstant::STATE_PARAMETER_KEY, $aRequestParameters)
            ? json_decode(base64_decode($aRequestParameters[Cafe24OAuthConstant::STATE_PARAMETER_KEY]))->mall_id :
            $aRequestParameters[Cafe24OAuthConstant::MALL_ID];

        $this->oCredentials[Cafe24OAuthConstant::MALL_ID] = $sMallId;
        return $this->oCredentials;
    }

    /**
     * Get Authorization url
     * @param array $aRequestValidated
     * @param array $aOptions
     * @return string
     */
    public function getAuthorizationURL(array $aRequestValidated, array $aOptions)
    {
        $oCafe24AuthProvider = new Cafe24($aOptions);
        $aOptions = [
            Cafe24OAuthConstant::STATE_PARAMETER_KEY => base64_encode(json_encode($aRequestValidated)),
            Cafe24OAuthConstant::SCOPE_PARAMETER_KEY => config('V2.app_scope')
        ];

        $sAuthorizationURL = $oCafe24AuthProvider->getAuthorizationUrl($aOptions);
        $this->oLibrarySession->insertSession(Cafe24OAuthConstant::OAUTH_2_STATE, $oCafe24AuthProvider->getState());
        return $sAuthorizationURL;
    }

    /**
     * Get Access token from Auth Provider
     * @param array $aRequestParameters
     * @return false|string
     */
    public function getAccessToken(array $aRequestParameters)
    {
        $aOptions = $this->setParameters($aRequestParameters);
        $oCafe24AuthProvider = new Cafe24($aOptions);
        try {
            $oAccessToken = $oCafe24AuthProvider->getAccessToken(
                Cafe24OAuthConstant::AUTHORIZATION_CODE_PARAMETER_KEY,
                [
                    Cafe24OAuthConstant::CODE_PARAMETER_KEY => $aRequestParameters[Cafe24OAuthConstant::CODE_PARAMETER_KEY]
                ]
            );
            $bMatchesSession = $this->matchWithSession($oAccessToken->getValues());
            $bValidUser = $this->checkUserValidity();
            if ($bMatchesSession === true && $bValidUser === true) {
                $oTokenResponse = $this->oRedisRepository->insertToken($oAccessToken->jsonSerialize());
                $this->oLibrarySession->insertSession(GuzzleConstant::ACCESS_TOKEN_KEY, $oTokenResponse);
                return $oTokenResponse;
            }
            $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::AUTH_KEYS);
            return false;
        } catch (IdentityProviderException $e) {
            exit($e->getMessage());
        }
    }

    /**
     * Do refresh token, get access_token key from session
     * @param $sAccessTokenKey
     * @return mixed
     */
    public function doRefreshAccessToken(string $sAccessTokenKey)
    {
        $aAccessToken = json_decode($this->oRedisRepository->getTokenData($sAccessTokenKey), true);
        return $this->refreshAccessToken($aAccessToken);
    }

    /**
     * Refresh access token
     * @param array $aAccessToken
     * @return false|string
     */
    public function refreshAccessToken(array $aAccessToken)
    {
        $this->oCredentials[Cafe24OAuthConstant::MALL_ID] = $aAccessToken[Cafe24OAuthConstant::MALL_ID];
        $oCafe24AuthProvider = new Cafe24($this->oCredentials);
        try {
            $oAccessToken = $oCafe24AuthProvider->getAccessToken(
                Cafe24OAuthConstant::REFRESH_TOKEN_KEY,
                [
                    Cafe24OAuthConstant::REFRESH_TOKEN_KEY => $aAccessToken[Cafe24OAuthConstant::REFRESH_TOKEN_KEY]
                ]);
            $bMatchesSession = $this->matchWithSession($oAccessToken->getValues());
            $bValidUser = $this->checkUserValidity();
            if ($bMatchesSession === true && $bValidUser === true) {
                $oTokenResponse = $this->oRedisRepository->insertToken($oAccessToken->jsonSerialize());
                $this->oLibrarySession->insertSession(GuzzleConstant::ACCESS_TOKEN_KEY, $oTokenResponse);
                return $oTokenResponse;
            }
            return false;
        }
        catch (IdentityProviderException $e) {
            exit($e->getMessage());
        }
    }

    /**
     * Match the token credentials with session ids
     * @param array $aToken
     * @return bool
     */
    private function matchWithSession(array $aToken)
    {
        $aSessionData = $this->oLibrarySession->getMultipleSession(Cafe24OAuthConstant::AUTH_KEYS);
        $bMatchedMallId = $aSessionData[Cafe24OAuthConstant::MALL_ID] === $aToken[Cafe24OAuthConstant::MALL_ID];
        $bMatchedUserId = $aSessionData[Cafe24OAuthConstant::USER_ID] === $aToken[Cafe24OAuthConstant::USER_ID];

        return $bMatchedMallId === true && $bMatchedUserId === true;
    }
}
