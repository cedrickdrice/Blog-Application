<?php

namespace App\Http\Requests\Admin;

use App\Constants\BaseConstant;
use App\Constants\FeedSettingsConstant;
use App\Constants\FeedDisplaySettingsConstant;
use App\Constants\FeedStyleSettingModelConstant;
use App\Constants\FeedStyleSettingsConstant;
use App\Constants\ResponseConstant;
use App\Http\Requests\BaseFormRequest;
use App\Libraries\LibraryResponse;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response;
use Illuminate\Validation\ValidationException;
use phpseclib\Crypt\Base;

/**
 * Class StoreFeedSettingsRequest
 * @package App\Http\Requests\Admin
 * @author  Jerome Palis <jerome02@simplexi.com.ph>
 * @version 1.0
 * @since   2022. 02. 15.
 */
class StoreFeedSettingsRequest extends BaseFormRequest
{
    /**
     * Simultaneous show of error
     * @var bool
     */
    protected $stopOnFirstFailure = true;

    /**
     * Get the validation rules that apply to the request.
     * rules
     * @return array
     */
    public function rules()
    {
        return [
            FeedSettingsConstant::MAP_FEED_URL                              => ['required','url','max:2083'],
            FeedSettingsConstant::MAP_FEED_SHOP_NO                          => ['required','integer'],
            FeedSettingsConstant::MAP_FEED_STORE_NAME                       => ['required'],
            FeedSettingsConstant::MAP_FEED_SHOW_FEED                        => ['required','boolean'],
            FeedSettingsConstant::MAP_FEED_BLOGGING_SITE_NO                 => ['required','integer'],
            FeedSettingsConstant::MAP_FEED_LOCATION_SELECTOR_NO             => ['required','integer'],
            FeedSettingsConstant::MAP_FEED_TITLE                            => ['required','min:1','max:250'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_POST_LIMIT_COUNT       => ['required','integer','max:250'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_POST_DESCRIPTION_COUNT => ['required','integer','max:500'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_POST_PER_PAGE          => ['required','integer','min:1','max:100'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_THUMBNAIL_FILEPATH     => ['nullable'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_SHOW_THUMBNAIL         => ['required','boolean'],
            FeedDisplaySettingsConstant::MAP_DISPLAY_LAYOUT_NO              => ['required','integer'],
            FeedStyleSettingsConstant::STYLES                                                                                           => [
                BaseConstant::VALIDATION_REQUIRED,
                BaseConstant::VALIDATION_ARRAY
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::FONT_TYPE        => [
                BaseConstant::VALIDATION_NULLABLE
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::FONT_SIZE        => [
                BaseConstant::VALIDATION_NULLABLE
            ],
            FeedStyleSettingsConstant::STYLES . BaseConstant::VALIDATION_MULTIPLE . FeedStyleSettingsConstant::FONT_COLOR       => [
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
     * Execute when validation fails
     * @param Validator $oValidator
     */
    protected function failedValidation(Validator $oValidator)
    {
        $response = LibraryResponse::errorResponse(
            [
                ResponseConstant::MESSAGE   => 'The given data is invalid',
                ResponseConstant::ERROR     => $oValidator->errors()
            ], ResponseConstant::FAILED_VALIDATION_CODE
        );

        throw new ValidationException($oValidator, $response);
    }
}
