<?php
namespace App\Libraries;

use App\Constants\GuzzleConstant;
use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\RequestOptions;

/**
 * Class libraryGuzzle
 * @package App\Libraries
 * @author Dann Dylan del Prado <dann@simplexi.com.ph> / jon <jon@simplexi.com> / daniel01  <daniel01@simlpexi.com>
 * @date 8/10/2018 2:43 PM
 * @updated 9/22/2020
 * @version 2.1
 */
class LibraryGuzzle extends GuzzleConstant
{
    /**
     * @param string     $sRequestType
     * @param string     $sUri
     * @param array      $aRequest
     * @param array|null $aHeader
     * @return array|string
     * @throws GuzzleException
     */
    public function request(string $sRequestType, string $sUri, array $aRequest, array $aHeader = [])
    {
        try {
            $aHeaders = array_merge([self::HEADER_KEY_CONTENT_TYPE => self::CONTENT_TYPE_JSON], $aHeader);
            $oClient = new Client([RequestOptions::VERIFY => false, RequestOptions::HEADERS => $aHeaders]);
            $mRequest = json_encode($aRequest);
            $oResponse = $oClient->request($sRequestType, $sUri, [RequestOptions::BODY => $mRequest]);
            $mResponse = json_decode($oResponse->getBody()->getContents(), true);
        } catch (ClientException $oException) {
            $mResponse = [
                self::CODE    => $oException->getCode(),
                self::MESSAGE => $oException->getResponse()->getBody()->getContents()
            ];
        } catch (Exception $oException) {
            $mResponse = [
                self::CODE    => $oException->getCode(),
                self::MESSAGE => $oException->getMessage()
            ];
        }
        return $mResponse;
    }
}
