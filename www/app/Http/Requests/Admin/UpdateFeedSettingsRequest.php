<?php

namespace App\Http\Requests\Admin;

use App\Constants\BaseConstant;
use App\Constants\FeedDisplaySettingModelConstant;
use App\Constants\FeedDisplaySettingsConstant;
use App\Constants\FeedSettingsConstant;
use App\Constants\FeedStyleSettingsConstant;
use App\Libraries\LibraryResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class UpdateFeedSettingsRequest extends FormRequest
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
            FeedSettingsConstant::FEED_NO => ['required', 'int'],
            FeedSettingsConstant::MAP_FEED_URL                              => ['required','url','max:2083'],
            FeedSettingsConstant::MAP_FEED_TITLE                            => ['required','min:1','max:250'],
            FeedSettingsConstant::MAP_FEED_SHOP_NO                          => ['required','integer'],
            FeedSettingsConstant::MAP_FEED_STORE_NAME                       => ['required'],
            FeedSettingsConstant::MAP_FEED_SHOW_FEED                        => ['required','boolean'],
            FeedSettingsConstant::MAP_FEED_BLOGGING_SITE_NO                 => ['required','integer'],
            FeedSettingsConstant::MAP_FEED_LOCATION_SELECTOR_NO             => ['required','integer'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_NO                     => ['required', 'integer'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_POST_LIMIT_COUNT       => ['required','integer','max:250'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_POST_DESCRIPTION_COUNT => ['required','integer','max:500'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_POST_PER_PAGE          => ['required','integer','min:1','max:100'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_THUMBNAIL_FILEPATH     => ['nullable'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_SHOW_THUMBNAIL         => ['required','boolean'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_LAYOUT_NO              => ['required','integer'],
            FeedStyleSettingsConstant::STYLES                                                                                  => [
                BaseConstant::VALIDATION_REQUIRED,
                BaseConstant::VALIDATION_ARRAY
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::STYLE_NO        => [
                BaseConstant::VALIDATION_REQUIRED,
                BaseConstant::VALIDATION_INTEGER
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::FONT_TYPE       => [
                BaseConstant::VALIDATION_NULLABLE
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::FONT_SIZE       => [
                BaseConstant::VALIDATION_NULLABLE
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::FONT_COLOR      => [
                BaseConstant::VALIDATION_NULLABLE
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::SHOW_DESCRIPTION => [
                BaseConstant::VALIDATION_NULLABLE,
                BaseConstant::VALIDATION_BOOLEAN
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::MODULE_NO        => [
                BaseConstant::VALIDATION_NULLABLE,
                BaseConstant::VALIDATION_INTEGER
            ]
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
        throw new HttpResponseException(LibraryResponse::errorResponse($aErrors, LibraryResponse::INVALID_PARAMETER_REQUEST));
    }
}
