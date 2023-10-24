<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\AdminBaseController;
use App\Libraries\Auxiliary\LibraryAssetManager;

/**
 * Class BlogFeedManagementController
 * @package App\Http\Controllers\Admin
 * @author Cedrick Drice <cedrick@simplexi.com.ph>
 * @version 2.0
 * @since   2022. 01. 13.
 */
class BlogFeedManagementController extends AdminBaseController
{
    /**
     * @param LibraryAssetManager $oAsset
     */
    public function __construct(LibraryAssetManager $oAsset)
    {
        $this->oAsset = $oAsset;
    }

    public function displayBlogFeedList() {
        $this->setBlogFeedList();
        return $this->view('blog.feeds');
    }
}
