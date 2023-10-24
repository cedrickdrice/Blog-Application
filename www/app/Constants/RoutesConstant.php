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
class RoutesConstant extends BaseConstant
{
    /**
     * URL separator
     */
    const URL_SEPARATOR = '/';

    /**
     * Cafe24 auth prefix
     */
    const WEB_AUTH_PREFIX = 'web_app.';

    /**
     * Cafe24 Api route
     */
    const WEB_API_URI = 'https://%s.web_appapi.com%s';

    /**
     * Error code for expired token
     */
    const EXPIRED_TOKEN = 401;

    /**
     * Route field namespace
     */
    const ROUTE_NAMESPACE = 'namespace';

    /**
     * Route field middleware
     */
    const ROUTE_MIDDLEWARE = 'middleware';

    /**
     * Route field 'as'
     */
    const ROUTE_NAMED_AS = 'as';

    /**
     * Route field prefix
     */
    const ROUTE_PREFIX = 'prefix';


    /**
     * Route field namespace admin
     */
    const ROUTE_NAMESPACE_ADMIN = 'Admin';

    /**
     * Route admin url
     */
    const ROUTE_ADMIN = 'admin';

    /**
     * Route field feeds
     */
    const ROUTE_FEED = 'feeds';

    /**
     * Route for feed settings
     */
    const ROUTE_FEED_SETTINGS = 'settings';

    /**
     * Route for blogging site
     */
    const ROUTE_BLOGGING_SITE_PROVIDER = 'provider';
}
