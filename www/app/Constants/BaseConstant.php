<?php

namespace App\Constants;

/**
 * Base constants
 * Class BaseConstant
 * @package App\Constants
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BaseConstant
{
    /**
     * Redis key separator
     */
    const REDIS_KEY_SEPARATOR = ':';

    /**
     * empty array
     */
    const VALUE_EMPTY_ARRAY = array();

    /**
     * Validation Rule: Required
     */
    const VALIDATION_REQUIRED = 'required';

    /**
     * @var string required in array
     */
    const VALIDATION_ARRAY = 'array';


    /**
     * Validation Rule: Same
     */
    const VALIDATION_SAME = 'same';

    /**
     * @var string VALIDATION_MULTIPLE
     */
    const VALIDATION_MULTIPLE = '.*.';

    /**
     * Validation separator
     */
    const VALIDATION_SEPARATOR = ':';
    /**
     * @var string ins_timestamp column
     */
    const COL_INSERT_TIMESTAMP = 'ins_timestamp';

    /**
     * @var string upd_timestamp column
     */
    const COL_UPDATED_TIMESTAMP = 'upd_timestamp';

    /**
     * @var string del_timestamp column
     */
    const COL_DELETE_TIMESTAMP = 'del_timestamp';

    /**
     * @var string admin value
     */
    const VALUE_ADMIN = 'admin';

    /**
     * @var string integer value
     */
    const VALIDATION_INTEGER = 'integer';

    /**
     * @var string nullable value
     */
    const VALIDATION_NULLABLE = 'nullable';

    /**
     * @var string 'mimes:jpeg,png,jpg,gif,svg' value
     */
    const VALIDATION_IMAGE = 'mimes:jpeg,png,jpg,gif,svg';

    /**
     * @var string max:2048 value
     */
    const VALIDATION_MAX_FILE_SIZE = 'max:2048';

    /**
     * @var string url value
     */
    const VALIDATION_URL = 'url';

    /**
     * @var string boolean value
     */
    const VALIDATION_BOOLEAN = 'boolean';

    /**
     * @var string file value;
     */
    const VALIDATION_FILE = 'file';

    /**
     * @var string thumbnail_file value
     */
    const THUMBNAIL_FILE = 'thumbnail_file';

    /**
     * @var string feed_settings
     */
    const FEED_SETTINGS = 'feed_settings';

    /**
     * @var string ceph
     */
    const CEPH = 'ceph';

    /**
     * @var string mall_id
     */
    const MALL_ID = 'mall_id';

    /**
     * null value
     */
    const VALUE_NULL = null;

    /**
     * Timezone: UTC
     */
    const TIMEZONE_UTC = 'UTC';

    /**
     * 10 Minute value
     * @var int VALUE_TEN_MINUTE
     */
    const VALUE_TEN_MINUTE = 10;

    /**
     * @var string inserted key
     */
    const KEY_INSERTED_COUNT = 'inserted_count';

    /**
     * @var string inserted key
     */
    const KEY_INSERTED = 'inserted';
}
