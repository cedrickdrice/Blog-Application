<?php

namespace App\Libraries;

/**
 * Class LibrarySession
 * @package App\Libraries
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class LibraryDateTime
{
    /**
     * Reformat the date format from API
     * @param string $sDateFormat
     * @return mixed
     */
    public static function reformatDate($sDateFormat)
    {
        $sDateFormat = (strlen(trim($sDateFormat)) > 0) ? $sDateFormat : 'YYYY-MM-DD';
        return str_replace(
            array('YYYY', 'MM', 'DD'),
            array('Y', 'm', 'd'),
            $sDateFormat
        );
    }

    /**
     * Reformat the time format from API
     * @param $sDateFormat
     * @return mixed
     */
    public static function reformatTime($sDateFormat)
    {
        $sDateFormat = (strlen(trim($sDateFormat)) > 0) ? $sDateFormat : 'hh:mm:ss';
        return str_replace(
            array('hh', 'mm', 'ss'),
            array('H', 'i', 's'),
            $sDateFormat
        );
    }
}
