<?php

namespace App\Http\Middleware;

use App\Constants\Cafe24OAuthConstant;
use App\Constants\BaseConstant;
use App\Constants\GuzzleConstant;
use App\Constants\ResponseConstant;
use App\Libraries\LibrarySession;
use Closure;
use Illuminate\Http\Request;

/**
 * Handles whether the session is valid and verify current user
 * Class SessionCheckMiddleware
 * @package App\Http\Middleware
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class SessionCheckMiddleware
{
    /**
     * Library Session variable
     * @var LibrarySession $oLibrarySession
     */
    protected $oLibrarySession;

    public function __construct(LibrarySession $oLibrarySession)
    {
        $this->oLibrarySession = $oLibrarySession;
    }

    /**
     * Handle an incoming request.
     * @param Request $oRequest
     * @param Closure $oNext
     * @return mixed
     */
    public function handle(Request $oRequest, Closure $oNext)
    {
        $aSessionData = $this->oLibrarySession->getMultipleSession([
            Cafe24OAuthConstant::MALL_ID,
            Cafe24OAuthConstant::USER_ID,
            GuzzleConstant::ACCESS_TOKEN_KEY
        ]);

        if ($aSessionData[Cafe24OAuthConstant::MALL_ID]     === BaseConstant::VALUE_NULL ||
            $aSessionData[Cafe24OAuthConstant::USER_ID]     === BaseConstant::VALUE_NULL ||
            $aSessionData[GuzzleConstant::ACCESS_TOKEN_KEY] === BaseConstant::VALUE_NULL
        ) {
            $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::AUTH_KEYS);
            abort(ResponseConstant::FAILED_VALIDATION_CODE, 'Session expired');
        }
        return $oNext($oRequest);
    }
}
