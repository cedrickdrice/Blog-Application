<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Admin;
use App\Constants\RoutesConstant;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => 'admin', 'as' => 'admin' .'.', RoutesConstant::ROUTE_MIDDLEWARE => 'apiMiddleware'], function() {
    Route::group([RoutesConstant::ROUTE_PREFIX => RoutesConstant::ROUTE_BLOGGING_SITE_PROVIDER], function() {
        Route::get('list',          [Admin\BlogFeedSettingsController::class, 'getBlogProviderList']);
    });

    Route::group([RoutesConstant::ROUTE_PREFIX => RoutesConstant::ROUTE_FEED], function() {
        Route::group([RoutesConstant::ROUTE_PREFIX => RoutesConstant::ROUTE_FEED_SETTINGS], function() {
            Route::get('{feed_no}', [Admin\BlogFeedSettingsController::class, 'getFeedDetail']);
            Route::get('rss/{feed_no}', [Admin\BlogFeedSettingsController::class, 'getRssFeed']);
            Route::put('{feed_no}', [Admin\BlogFeedSettingsController::class, 'updateFeedSettings']);
        });

        Route::post('store',        [Admin\BlogFeedSettingsController::class, 'storeFeed']);
        Route::get('shops',         [Admin\BlogFeedSettingsController::class, 'getShops']);
    });
});

