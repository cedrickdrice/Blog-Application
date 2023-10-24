<?php

namespace App\Http\Middleware\api;

use App\Constants\BaseConstant;
use App\Constants\Cafe24OAuthConstant;
use App\Constants\GuzzleConstant;
use App\Constants\ResponseConstant;
use App\Libraries\LibraryResponse;
use App\Libraries\LibrarySession;
use Closure;
use Illuminate\Http\Request;

class SessionCheckMiddleware
{
    /**
     * Library session variable
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

        if ($aSessionData[Cafe24OAuthConstant::MALL_ID] === BaseConstant::VALUE_NULL ||
            $aSessionData[Cafe24OAuthConstant::USER_ID] === BaseConstant::VALUE_NULL ||
            $aSessionData[GuzzleConstant::ACCESS_TOKEN_KEY] === BaseConstant::VALUE_NULL
        ) {
            $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::AUTH_KEYS);
            return LibraryResponse::errorResponse('Session expired', ResponseConstant::FAILED_VALIDATION_CODE);
        }
        return $oNext($oRequest);
    }
}


