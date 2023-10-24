<?php

namespace App\Repositories;

use App\Libraries\LibraryRedis;

/**
 * Class BaseRepository
 * @package App\Repositories
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BaseRepository
{
    /**
     * @var LibraryRedis $oLibraryRedis
     */
    protected $oLibraryRedis;

    /**
     * BaseRepository constructor.
     * @param LibraryRedis $oLibraryRedis
     */
    public function __construct(LibraryRedis $oLibraryRedis)
    {
        $this->oLibraryRedis = $oLibraryRedis;
    }
}
