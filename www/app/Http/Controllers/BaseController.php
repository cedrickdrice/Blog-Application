<?php

namespace App\Http\Controllers;

use App\Constants\ResponseConstant;
use Illuminate\Http\Request;

/**
 * Class BaseController
 * @package App\Http\Controllers
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BaseController extends Controller
{
    /**
     * Controller's request instance
     * @var Request $oRequest
     */
    protected $oRequest;

    /**
     * Controller's Service instance
     * @var $oService
     */
    protected $oService;

    /**
     * redirect user to forbidden page
     */
    protected function redirectToForbidden()
    {
        return abort(ResponseConstant::FAILED_VALIDATION_CODE);
    }
}
