<?php

namespace App\Libraries;

use App\Constants\ResponseConstant;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Response as Response;
/**
 * Class ResponseLibrary
 * @package App\Libraries
 * @author Cedrick Drice <cedrick@simplexi.com>
 * @version 1.0.0
 * @since 2021.03.05
 */
class LibraryResponse extends ResponseConstant
{
    /**
     * Returns success format
     * @param array $aData
     * @return JsonResponse
     */
    public static function successDataResponse(array $aData)
    {
        return Response::json([
            self::RESULT => self::SUCCESS,
            self::DATA   => $aData,
        ], self::OK_REQUEST);
    }

    /**
     * Returns error response
     * @param $aMessage
     * @param int $iHttpCode
     * @return JsonResponse
     */
    public static function errorResponse($aMessage, int $iHttpCode)
    {
        return Response::json([
            self::RESULT  => self::FAIL,
            self::MESSAGE => $aMessage,
        ], $iHttpCode);
    }

    /**
     * Return Data not found response
     * @return JsonResponse
     */
    public static function noDataResponse()
    {
        return self::errorResponse(self::NO_DATA, self::NOT_FOUND);
    }
}
