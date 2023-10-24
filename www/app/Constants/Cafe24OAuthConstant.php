<?php

namespace App\Constants;

/**
 * Class Cafe24OAuthConstant
 * @package App\Constants
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class Cafe24OAuthConstant extends BaseConstant
{
    /**
     * Mall ID Key
     */
    const MALL_ID = 'mall_id';

    /**
     * User ID Key
     */
    const USER_ID = 'user_id';

    /**
     * Shop No
     */
    const SHOP_NO = 'shop_no';

    /**
     * User Type Key
     */
    const USER_TYPE = 'user_type';

    /**
     * Valid user types
     * @var array
     */
    const USER_TYPES = ['P', 'A'];

    /**
     * Code parameter key
     */
    const CODE_PARAMETER_KEY = 'code';

    /**
     * State parameter key
     */
    const STATE_PARAMETER_KEY = 'state';

    /**
     * OAuth 2 State
     */
    const OAUTH_2_STATE = 'oauth2state';

    /**
     * Client id key
     */
    const CLIENT_ID_KEY = 'clientId';

    /**
     * Client secret key
     */
    const CLIENT_SECRET_KEY = 'clientSecret';

    /**
     * redirect uri key
     */
    const REDIRECT_URI_KEY = 'redirectUri';

    /**
     * scope parameter key
     */
    const SCOPE_PARAMETER_KEY = 'scope';

    /**
     * Authorization code key
     */
    const AUTHORIZATION_CODE_PARAMETER_KEY = 'authorization_code';

    /**
     * Access token key
     */
    const ACCESS_TOKEN_KEY = 'access_token';

    /**
     * Refresh token key
     */
    const REFRESH_TOKEN_KEY = 'refresh_token';

    /**
     * Access token expires at key
     */
    const TOKEN_EXPIRES_AT = 'expires_at';


    /**
     * Commonly used keys for session
     * @const  array
     */
    const AUTH_KEYS = array(
        Cafe24OAuthConstant::MALL_ID,
        Cafe24OAuthConstant::USER_ID,
        Cafe24OAuthConstant::USER_TYPE
    );

    /**
     * Cafe24 Get Shops API
     */
    const GET_SHOPS_API_ENDPOINT = '/api/v2/admin/shops';
}
