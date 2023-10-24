<?php

namespace App\Http\Requests\Admin\Auth;

use App\Constants\Cafe24OAuthConstant;
use App\Constants\BaseConstant;
use App\Http\Requests\BaseFormRequest;
use App\Libraries\LibrarySession;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\Rule;

/**
 * form request for cafe app oauth request
 * @package AdminAuthPayLoadRequest
 * @author  jerome02 <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 01. 07.
 */
class AdminAuthPayLoadRequest extends BaseFormRequest
{
    /**
     * Add Additional Field to be Validate
     * @documentation add oauth2state from session
     * @return void
     */
    protected function prepareForValidation()
    {
        $sOAuth2State = $this->oLibrarySession->getSession(Cafe24OAuthConstant::OAUTH_2_STATE);
        $this->merge([
            Cafe24OAuthConstant::OAUTH_2_STATE => $sOAuth2State,
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            Cafe24OAuthConstant::CODE_PARAMETER_KEY  => [BaseConstant::VALIDATION_REQUIRED],
            Cafe24OAuthConstant::STATE_PARAMETER_KEY => [
                BaseConstant::VALIDATION_REQUIRED,
                Rule::in([
                    LibrarySession::getSession(Cafe24OAuthConstant::OAUTH_2_STATE)
                ])
            ]
        ];
    }

    /**
     * Execute when validation fails
     * @param Validator $oValidator
     */
    protected function failedValidation(Validator $oValidator)
    {
        $this->redirectToForbidden();
    }
}
