<?php
namespace App\Libraries\Auxiliary;
/**
 * Library to generate asset links
 * @package App\Library\auxiliary
 * @author  Fritz Patrick Pamintuan <fritz@simplexi.com.ph>
 * @since   2021.12.22
 */
class LibraryAssetManager
{
    /**
     * Array of external CSS links
     * @var array
     */
    private $aExternalCss = [];

    /**
     * Array of external Javascript links
     * @var array
     */
    private $aExternalJs = [];

    /**
     * Array of Internal CSS located in resources/css folder
     * @var array
     */
    private $aInternalCss = [];

    /**
     * Array of Internal JS located in resources/js folder
     * @var array
     */
    private $aInternalJs = [];

    /**
     * Public JS/CSS Url
     * @var array
     */
    protected $aPublicUrl = [
        'js'  => '/js',
        'css' => '/css',
        'img' => '/img'
    ];

    /**
     * Initialize internal CSS sources
     * @param string $sCssAsset
     * @return void
     */
    public function useCss(string $sCssAsset)
    {
        $this->aInternalCss[] = $this->aPublicUrl['css'] . DS . $sCssAsset . '.css';
    }

    /**
     * Initialize internal JS sources
     * @param string $sJsAsset
     * @return void
     */
    public function useJs(string $sJsAsset)
    {
        $this->aInternalJs[] = $this->aPublicUrl['js'] . DS . $sJsAsset . '.js';
    }

    /**
     * Initialize external CSS sources
     * @param string $sCssAssetUrl
     * @return void
     */
    public function useExternalCss($sCssAssetUrl)
    {
        $this->aExternalCss[] = $sCssAssetUrl;
    }

    /**
     * Initialize external JS sources
     * @param string $sJsAssetUrl
     * @return void
     */
    public function useExternalJs($sJsAssetUrl)
    {
        $this->aExternalJs[] = $sJsAssetUrl;
    }

    /**
     * Compile all internal CSS assets
     * @return void
     */
    public function compileCssAsset(): array
    {
        return $this->aInternalCss;
    }

    /**
     * Compile all internal JS assets
     * @return void
     */
    public function compileJsAsset(): array
    {
        return $this->aInternalJs;
    }

    /**
     * Compile all external CSS assets
     * @return void
     */
    public function compileExternalCssAsset(): array
    {
        return $this->aExternalCss;
    }

    /**
     * Compile all external JS assets
     * @return void
     */
    public function compileExternalJsAsset(): array
    {
        return $this->aExternalJs;
    }
}
