<?php

namespace App\Constants;

/**
 * Commonly used constants
 * Class CommonConstant
 * @package App\Constants
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class ResponseConstant extends BaseConstant
{
    /**
     * HTTP Error 400
     */
    const BAD_REQUEST = 400;

    /**
     * HTTP OK request
     */
    const OK_REQUEST = 200;

    /**
     * API Response Text
     * @var string API_RESPONSE
     */
    const API_RESPONSE = 'response';

    /**
     * Admin Index Page
     * @var string ROUTE_ADMIN_PAGE
     */
    const ROUTE_ADMIN_PAGE = 'admin.feed.list';

    /**
     * Code Result
     */
    const CODE_RESULT = 'code';
    /**
     * The client does not have access rights to the content and unauthorized
     * @var int FAILED_VALIDATION_CODE
     */
    const FAILED_VALIDATION_CODE = 403;

    /**
     * HTTP Error 422
     */
    const INVALID_PARAMETER_REQUEST = 422;

    /**
     * Returned array key for mixed data
     * Used by ResponseConstant and AdminModule constant
     * @var string RETURN_KEY_RESULT_DATA
     */
    const RETURN_KEY_RESULT_DATA = 'mData';

    /**
     * @var string data
     */
    const DATA = 'data';

    /**
     * @var string result
     */
    const RESULT = 'result';

    /**
     * @var string failed
     */
    const FAIL = 'failed';

    /**
     * @var string success
     */
    const SUCCESS = 'success';

    /**
     * @var string message
     */
    const MESSAGE = 'message';

    /**
     * @var string error list
     */
    const ERROR = 'errors';

    /**
     * No data message
     */
    const NO_DATA = 'Data not found';

    /**
     * HTTP ERROR 404
     */
    const NOT_FOUND = 404;
}
