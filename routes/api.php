<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;
use App\Http\Controllers\EventController;
use App\Http\Controllers\RatingController;
use App\Http\Controllers\PaymentsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function (Router $router) {
    Route::get('/events', [EventController::class, 'index']);
    Route::get('/ratings', [RatingController::class, 'index']);
    Route::get('/ratings/show/{id}', [RatingController::class, 'show']);
    Route::post('/payments', [PaymentsController::class, 'store']);
    Route::get('/payment-callback', [PaymentsController::class, 'paymentCallback']);
    Route::get('/validate-mpesa', [EventController::class, 'validate']);
    Route::get('/confirm-mpesa', [EventController::class, 'confirm']);
});
