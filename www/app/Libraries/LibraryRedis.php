<?php

namespace App\Libraries;

use Illuminate\Support\Facades\Redis;

/**
 * Class LibraryRedis
 * @package App\Libraries
 * @author  Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class LibraryRedis
{
    /**
     * @var $sTable
     */
    private $sTable;

    /**
     * Set configuration for redis
     * @param string $sTable
     * @param int $iTtl time in seconds (default 1 hour 55 minutes)
     */
    public function setConfig(string $sTable, int $iTtl = 6900)
    {
        $this->sTable = $sTable;
        Redis::expire($this->sTable, $iTtl);
    }

    /**
     * Set the table key
     *
     * @param $sTable
     */
    public function setTable(string $sTable)
    {
        $this->sTable = $sTable;
    }

    /**
     * Set expiration of key
     *
     * @param int $iExpiration
     * @return mixed
     */
    public function setExpiration(int $iExpiration)
    {
        return Redis::expire($this->sTable, $iExpiration);
    }

    /**
     * Store data to redis
     *
     * @param $mData
     * @return mixed
     */
    public function insert($mData)
    {
        return Redis::rPush($this->sTable, $this->encodeData($mData));
    }

    /**
     * Insert data string
     * @param $mData
     * @return mixed
     */
    public function setData($mData)
    {
        return Redis::set($this->sTable, $mData);
    }

    /**
     * Get the last data from table
     *
     * @return mixed
     */
    public function get()
    {
        return Redis::lindex($this->sTable, $this->getCurrentPk() - 1);
    }

    /**
     * Get set data
     * @return mixed
     */
    public function getData()
    {
        return Redis::get($this->sTable);
    }

    /**
     * Get all keys
     * @param string $sPattern
     * @return mixed
     */
    public function getAllKeys(string $sPattern)
    {
        return Redis::keys($sPattern);
    }

    /**
     * Destroy the table
     *
     * @return mixed
     */
    public function remove()
    {
        return Redis::del($this->sTable);
    }

    /**
     * method to get the last primary key/seq of the table
     * @return int
     */
    public function getCurrentPk()
    {
        return (int)Redis::get($this->sTable . ':pk');
    }

    /**
     * Get values from multiple keys
     * @param array $aKeys
     * @return mixed
     */
    public function multipleGet(array $aKeys)
    {
        return Redis::mget($aKeys);
    }

    /**
     * Get TTL of key
     *
     * @return mixed
     */
    public function getRemainingTime()
    {
        return Redis::ttl($this->sTable);
    }

    /**
     * Check if data exist in Redis
     *
     * @return bool
     */
    public function checkRecordExistence()
    {
        return $this->get() !== null;
    }

    /**
     * Set hash value
     *
     * @param string $sKey
     * @param        $mValue
     * @return mixed
     */
    public function setHashValue(string $sKey, $mValue)
    {
        return Redis::hset($this->sTable, $sKey, $mValue);
    }

    /**
     * Get hash value by key
     *
     * @param $sKey
     * @return mixed
     */
    public function getHashValue(string $sKey)
    {
        return Redis::hget($this->sTable, $sKey);
    }

    /**
     * Remove hash value by key
     *
     * @param $sKey
     * @return mixed
     */
    public function removeHashValue(string $sKey)
    {
        return Redis::hdel($this->sTable, $sKey);
    }

    /**
     * Get all hash key-value in table
     *
     * @return mixed
     */
    public function getAllHashValues()
    {
        return Redis::hGetAll($this->sTable);
    }

    /**
     * Get hash values only without key
     * @return mixed
     */
    public function getAllHashValuesOnly()
    {
        return Redis::hvals($this->sTable);
    }


    /**
     * Encode data to json
     *
     * @param $mData
     * @return false|string
     */
    private function encodeData($mData)
    {
        return json_encode($mData);
    }
}
