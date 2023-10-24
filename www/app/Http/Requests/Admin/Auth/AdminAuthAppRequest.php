<?php

namespace App\Http\Requests\Admin\Auth;

use App\Constants\Cafe24OAuthConstant;
use App\Constants\BaseConstant;
use App\Http\Requests\BaseFormRequest;
use Illuminate\Contracts\Validation\Validator;

/**
 * form request for cafe app oauth request
 * @package AdminAuthAppRequest
 * @author  jerome02 <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 01. 07.
 */
class AdminAuthAppRequest extends BaseFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     * rules
     * @return array
     */
    public function rules()
    {
        return [
            Cafe24OAuthConstant::MALL_ID   => [BaseConstant::VALIDATION_REQUIRED],
            Cafe24OAuthConstant::USER_ID   => [BaseConstant::VALIDATION_REQUIRED],
            Cafe24OAuthConstant::USER_TYPE => [BaseConstant::VALIDATION_REQUIRED],
            Cafe24OAuthConstant::SHOP_NO   => [BaseConstant::VALIDATION_REQUIRED],
        ];
    }

    /**
     * Execute when validation fails
     * @param Validator $oValidator
     */
    protected function failedValidation(Validator $oValidator)
    {
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::MALL_ID);
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::USER_ID);
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::USER_TYPE );
        $this->oLibrarySession->deleteSession(Cafe24OAuthConstant::SHOP_NO );
        $this->redirectToForbidden();
    }

}
