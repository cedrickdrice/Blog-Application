<?php

namespace App\Constants;

/**
 * Commonly guzzle used constants
 * Class CommonConstant
 * @package App\Constants
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class GuzzleConstant extends BaseConstant
{
    /**
     * Key for guzzle success response
     */
    const MDATA = 'mData';

    /**
     * Key for guzzle error response
     */
    const CODE = 'code';

    /**
     * Key for guzzle error response
     */
    const MESSAGE = 'message';

    /**
     * @var string
     */
    const METHOD_POST = 'POST';

    /**
     * @var string
     */
    const METHOD_GET = 'GET';

    /**
     * @var string
     */
    const METHOD_DELETE = 'DELETE';

    /**
     * @var string
     */
    const METHOD_PUT = 'PUT';

    /**
     * @var string
     */
    const HEADER_KEY_CONTENT_TYPE = 'Content-Type';

    /**
     * @var string
     */
    const CONTENT_TYPE_JSON = 'application/json';

    /**
     * Authorization header
     */
    const HEADER_AUTHORIZATION = 'Authorization';

    /**
     * Token Bearer
     */
    const BEARER = 'Bearer %s';

    /**
     * Client ID param key
     */
    const CLIENT_ID = 'client_id';

    /**
     * Request param key
     */
    const REQUEST = 'request';
    /**
     * Key param key
     */
    const KEY = 'key';

    /**
     * Value param key
     */
    const VALUE = 'value';

    /**
     * session Access token key
     */
    const ACCESS_TOKEN_KEY = 'access_token_key';
}
