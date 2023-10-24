<?php

namespace App\Http\Requests\Admin;

use App\Constants\BaseConstant;
use App\Constants\FeedSettingsConstant;
use App\Http\Requests\BaseFormRequest;
use App\Libraries\LibraryResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

/**
 * Class GetFeedSettingsRequest
 * @package App\Http\Requests\Admin
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 03. 13
 */
class GetFeedSettingsRequest extends BaseFormRequest
{
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
     * Run before start of validation
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([FeedSettingsConstant::FEED_NO => $this->route(FeedSettingsConstant::FEED_NO)]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            FeedSettingsConstant::FEED_NO => [BaseConstant::VALIDATION_REQUIRED, BaseConstant::VALIDATION_INTEGER]
        ];
    }

    /**
     * Handle a failed validation attempt.
     * @param  \Illuminate\Contracts\Validation\Validator $validator
     * @return void
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function failedValidation(Validator $oValidator)
    {
        $aErrors = (new ValidationException($oValidator))->errors();
        throw new HttpResponseException(LibraryResponse::errorResponse('Please provide a Valid ID', LibraryResponse::INVALID_PARAMETER_REQUEST));
    }
}
