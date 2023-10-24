<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\Admin;
use App\Constants\RoutesConstant;

Route::group([RoutesConstant::ROUTE_NAMESPACE => RoutesConstant::ROUTE_NAMESPACE_ADMIN], function () {
    Route::get('auth',              [Admin\AuthController::class, 'authenticate'])->name('auth'); //add middleware middleware('web_app.hmac') to test hmac validity
    Route::get('auth/callback',     [Admin\AuthController::class, 'processAuthenticationPayload'])->name('callback'); //add middleware middleware('web_app.hmac') to test hmac validity

    Route::group([RoutesConstant::ROUTE_PREFIX => RoutesConstant::ROUTE_ADMIN, RoutesConstant::ROUTE_NAMED_AS => RoutesConstant::ROUTE_ADMIN .'.', RoutesConstant::ROUTE_MIDDLEWARE => 'OAuthMiddleware'], function() {
        Route::group([RoutesConstant::ROUTE_PREFIX => 'feeds', RoutesConstant::ROUTE_NAMED_AS => 'feed.'], function() {
            Route::get('/', [Admin\BlogFeedManagementController::class, 'displayBlogFeedList'])->name('list');
        });
        Route::group([RoutesConstant::ROUTE_PREFIX => 'settings', RoutesConstant::ROUTE_NAMED_AS => 'settings.'], function() {
            Route::get('/', [Admin\BlogFeedSettingsController::class, 'displayBlogFeedSettings'])->name('create');
            Route::get('/{feed_no}', [Admin\BlogFeedSettingsController::class, 'displayBlogFeedSettings']);
        });
    });
});

