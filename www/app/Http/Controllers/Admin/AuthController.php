<?php

namespace App\Http\Controllers\Admin;

use App\Constants\ResponseConstant;
use App\Http\Controllers\Admin\AdminBaseController;
use App\Http\Requests\Admin\Auth\AdminAuthPayLoadRequest;
use App\Http\Requests\Admin\Auth\AdminAuthAppRequest;
use App\Services\AdminSettingsService;
use App\Services\Cafe24OAuthService;
use Illuminate\Http\Request;

/**
 * Class AuthController
 * @package App\Http\Controllers\Admin
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class AuthController extends AdminBaseController
{
    /**
     * Admin Settings Service instance
     * @var AdminSettingsService $oService
     */
    protected $oAdminSettingsService;

    /**
     * AuthController constructor.
     * initializes the Services classes OauthService, AdminSettingsService
     * @param Request              $oRequest
     * @param Cafe24OAuthService   $oAuthService
     * @param AdminSettingsService $oAdminSettingsService
     */
    public function __construct(Request $oRequest, Cafe24OAuthService $oAuthService, AdminSettingsService $oAdminSettingsService)
    {
        $this->oRequest = $oRequest;
        $this->oService = $oAuthService;
        $this->oAdminSettingsService = $oAdminSettingsService;
    }

    /**
     * Validates web_appoauth request parameters
     * @param AdminAuthAppRequest $oRequest
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\never|void
     */
    public function authenticate(AdminAuthAppRequest $oRequest)
    {

        $aRequestValidated = $oRequest->validated();
        $mAuthorized = $this->oService->checkAuth($aRequestValidated);

        if (is_string($mAuthorized) === true) {
            return redirect()->route($mAuthorized);
        }
        $aOptions = $this->oService->setParameters($aRequestValidated);
        return ($mAuthorized === true) ? redirect($this->oService->getAuthorizationURL($aRequestValidated, $aOptions)) : $this->redirectToForbidden();
    }

    /**
     * process payload from web_app oauth request
     * @param AdminAuthPayLoadRequest $oRequest
     * @return \Illuminate\Http\RedirectResponse|\never|void
     */
    public function processAuthenticationPayload(AdminAuthPayLoadRequest $oRequest)
    {

        $aRequestValidated = $oRequest->validated();
        $aResponse = $this->oService->getAccessToken($aRequestValidated);

        if ($aResponse === false) {
            return $this->redirectToForbidden();
        }

        $this->oAdminSettingsService->setAdminSettings();
        return redirect()->route(ResponseConstant::ROUTE_ADMIN_PAGE);
    }

}
