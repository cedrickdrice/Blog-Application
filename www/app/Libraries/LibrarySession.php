<?php
namespace App\Libraries;

/**
 * Class LibrarySession
 * @package App\Libraries
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class LibrarySession
{
    /**
     * Insert data
     * @param string $sKey
     * @param mixed $mValue
     * @return boolean
     */
    public function insertSession(string $sKey, $mValue)
    {
        session()->put($sKey, $mValue);
        session()->save();
        return true;
    }

    /**
     * Insert multiple data
     * @param array $aData
     */
    public function insertMultipleSession(array $aData)
    {
        foreach ($aData as $sKey => $sValue) {
            session()->put($sKey, $sValue);
        }
        session()->save();
    }

    /**
     * Get session based on key
     * @param string $sKey
     * @return mixed
     */
    public function getSession(string $sKey)
    {
        return session()->get($sKey);
    }

    /**
     * Get multiple data
     * @param array $aKey
     * @return array
     */
    public function getMultipleSession(array $aKey)
    {
        $aData = [];
        foreach ($aKey as $sKey) {
            $aData[$sKey] = self::getSession($sKey);
        }
        return $aData;
    }

    /**
     * Delete data
     * @param mixed $mKeys
     * @return void
     */
    public function deleteSession($mKeys)
    {
        return session()->forget($mKeys);
    }

    /**
     * Check multiple key if exists
     * @param array $aKey
     * @return boolean
     */
    public function checkMultipleSessionExist(array $aKey)
    {
        foreach ($aKey as $sKey) {
            if (session()->has($sKey) === false || self::getSession($sKey) === null) {
                return false;
            }
        }
        return true;
    }

    /**
     * Delete all session
     * @return void
     */
    public function destroySession()
    {
        return session()->flush();
    }
}
