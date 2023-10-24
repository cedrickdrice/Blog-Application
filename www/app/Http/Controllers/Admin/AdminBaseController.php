<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\BaseController;
use App\Libraries\Auxiliary\LibraryAssetManager;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\View\View;

/**
 * Class BlogFeedManagementController
 * @package App\Http\Controllers\Admin
 * @author  Fritz Patrick Pamintuan <fritz@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 02. 11.
 */
class AdminBaseController extends BaseController
{
    /**
     * Object for asset manager
     * @var LibraryAssetManager
     */
    protected $oAsset;

    /**
     * Assets that are use in all pages
     */
    private function setCommonResources()
    {
        $this->oAsset->useExternalCss('https://img.echosting.web_app.com/css/suio.css');
        $this->oAsset->useExternalCss('https://cdn.jsdelivr.net/npm/@duetds/date-picker@1.4.0/dist/duet/themes/default.css');
        $this->oAsset->useExternalCss('https://cdn.datatables.net/1.11.3/css/jquery.dataTables.css');
        $this->oAsset->useExternalCss('https://unpkg.com/simplebar@latest/dist/simplebar.css');
        $this->oAsset->useExternalCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick.min.css');
        $this->oAsset->useExternalCss('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.9/slick-theme.min.css');
        $this->oAsset->useExternalCss('https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/themes/nano.min.css');
        $this->oAsset->useCss('main/admin/lucid-reset');
        $this->oAsset->useCss('main/admin/header');
        $this->oAsset->useCss('main/admin/toggleSwitch');
        $this->oAsset->useCss('main/admin/dropdown');
        $this->oAsset->useCss('main/admin/layout');
        $this->oAsset->useCss('main/admin/loader');
        $this->oAsset->useCss('main/admin/pagination');
        $this->oAsset->useCss('main/admin/img-upload-input');
        $this->oAsset->useCss('main/admin/dotum');
        $this->oAsset->useCss('main/admin/malgun');
        $this->oAsset->useCss('main/admin/plugins/web_app-language-selector/language_selector');
        $this->oAsset->useCss('main/admin/plugins/web_app-language-selector/language');
        $this->oAsset->useCss('main/admin/plugins/sweetalert2/alerts-switch');
        $this->oAsset->useCss('main/admin/plugins/sweetalert2/alerts-button');
        $this->oAsset->useExternalJs('https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
        $this->oAsset->useExternalJs('https://img.echosting.web_app.com/js/suio.js');
        $this->oAsset->useExternalJs('https://img.echosting.web_app.com/calendars/duetds/js/3.6.5/duet.js');
        $this->oAsset->useExternalJs('https://cdn.jsdelivr.net/npm/sweetalert2@11');
        $this->oAsset->useExternalJs('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
        $this->oAsset->useExternalJs('https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js');
        $this->oAsset->useExternalJs('https://unpkg.com/simplebar@latest/dist/simplebar.min.js');
        $this->oAsset->useExternalJs('https://cdn.jsdelivr.net/npm/@simonwep/pickr/dist/pickr.min.js');
        $this->oAsset->useJs('app');
        $this->oAsset->useJs('main/admin/feed');
        $this->oAsset->useJs('main/admin/language_selector');
        $this->oAsset->useJs('main/admin/switch-tabs');
        $this->oAsset->useJs('main/admin/alerts-switch');
        $this->oAsset->useJs('main/admin/alerts-button');
        $this->oAsset->useJs('main/admin/dropdown');
        $this->oAsset->useJs('main/admin/search-filter');
        $this->oAsset->useJs('main/admin/previewSettings');
        $this->oAsset->useJs('main/admin/list-table');
    }

    /**
     * Assets that are use in blog feed list
     */
    protected function setBlogFeedList()
    {
        $this->setCommonResources();
    }

    /**
     * Assets that are use in blog settings
     */
    protected function setBlogSettings()
    {
        $this->setCommonResources();
        $this->oAsset->useCss('main/admin/admin-list-settings');
        $this->oAsset->useCss('main/admin/blog-feed');
        $this->oAsset->useCss('main/admin/quantity');
        $this->oAsset->useCss('main/admin/feed-buttons');
        $this->oAsset->useCss('main/admin/feed-table');
        $this->oAsset->useJs('main/admin/quantity');
    }

    /**
     * Helper function for view
     * @param string $sView
     * @return Factory|View
     */
    protected function view(string $sView)
    {
        return view($sView)->with([
            'aExternalCssAsset' => $this->oAsset->compileExternalCssAsset(),
            'aCssAsset'         => $this->oAsset->compileCssAsset(),
            'aExternalJsAsset'  => $this->oAsset->compileExternalJsAsset(),
            'aJsAsset'          => $this->oAsset->compileJsAsset()
        ]);
    }
}
