<?php

namespace App\Http\Requests;

use App\Constants\ResponseConstant;
use App\Libraries\LibrarySession;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class BaseFormRequest
 * @package App\Http\Requests
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 01. 20.
 */
class BaseFormRequest extends FormRequest
{
    /**
     * Library Session variable
     * @var LibrarySession $oLibrarySession
     */
    protected $oLibrarySession;

    /**
     * BaseFormRequest constructor.
     * @param array $aQuery
     * @param array $aRequest
     * @param array $aAttributes
     * @param array $aCookies
     * @param array $aFiles
     * @param array $aServer
     * @param null  $mContent
     */
    public function __construct(array $aQuery = [], array $aRequest = [], array $aAttributes = [], array $aCookies = [], array $aFiles = [], array $aServer = [], $mContent = null)
    {
        parent::__construct($aQuery, $aRequest, $aAttributes, $aCookies, $aFiles, $aServer, $mContent);
        $this->oLibrarySession = new LibrarySession();
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * redirect user to forbidden page
     */
    protected function redirectToForbidden()
    {
        return abort(ResponseConstant::FAILED_VALIDATION_CODE);
    }

    protected function returnFailedResponse()
    {

    }
}
