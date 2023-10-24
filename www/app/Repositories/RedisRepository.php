<?php

namespace App\Repositories;

use App\Constants\BaseConstant;
use App\Libraries\LibraryRedis;
use App\Constants\Cafe24OAuthConstant;

/**
 * Class RedisRepository
 * @package App\Repositories
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class RedisRepository extends BaseRepository
{
    /**
     * RedisRepository constructor.
     * @param libraryRedis $oLibraryRedis
     */
    public function __construct(LibraryRedis $oLibraryRedis)
    {
        parent::__construct($oLibraryRedis);
    }

    /**
     * Insert token to redis
     * @param array $aToken
     * @return string
     */
    public function insertToken(array $aToken)
    {
        $sRedisTableKey = $this->getRedisTableKey($aToken, Cafe24OAuthConstant::ACCESS_TOKEN_KEY);
        $this->oLibraryRedis->setTable($sRedisTableKey);
        $this->oLibraryRedis->remove();
        $this->oLibraryRedis->insert($aToken);
        return $sRedisTableKey;
    }

    /**
     * Fetch token from redis with table key
     * @param string $sRedisTableKey
     * @return bool|mixed
     */
    public function getTokenData(string $sRedisTableKey)
    {
        $this->oLibraryRedis->setTable($sRedisTableKey);
        $bExisting = $this->oLibraryRedis->checkRecordExistence();
        return $bExisting === true ? $this->oLibraryRedis->get() : false;
    }

    /**
     * Fetch table key
     * @param array  $aToken
     * @param string $sCacheKey
     * @return string
     */
    public function getRedisTableKey(array $aToken, string $sCacheKey)
    {
        return env('APP_NAME') . BaseConstant::REDIS_KEY_SEPARATOR . $aToken[Cafe24OAuthConstant::MALL_ID] . BaseConstant::REDIS_KEY_SEPARATOR . $aToken[Cafe24OAuthConstant::USER_ID] . BaseConstant::REDIS_KEY_SEPARATOR .  $sCacheKey;
    }

    /**
     * Save Blog Feed cache
     * @param string $sCacheKey
     * @param array $aBlogFeed
     * @return int length of list
     */
    public function makeBlogFeedCache(string $sCacheKey, array $aBlogFeed)
    {
        $this->oLibraryRedis->setTable($sCacheKey);
        $this->oLibraryRedis->remove();
        return $this->oLibraryRedis->insert($aBlogFeed);
    }

    /**
     * Get Feed Settings cached data
     * @param $sCacheKey
     * @return false|mixed
     */
    public function getCachedFeedData($sCacheKey)
    {
        $this->oLibraryRedis->setTable($sCacheKey);
        $bExisting = $this->oLibraryRedis->checkRecordExistence();
        return $bExisting === true ? json_decode($this->oLibraryRedis->get(), true) : false;
    }
}
