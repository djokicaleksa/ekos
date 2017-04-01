<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('test', function (){
    return "asd";
});

Route::post('score', 'ApiController@score');

Route::get('/user-stats/{id}', 'ApiController@userStats');
Route::get('/get-global-stats', 'ApiController@globalStats');

Route::get('/get-aluminium', 'ApiController@getAllAluminium');
Route::get('/get-paper', 'ApiController@getAllPaper');
Route::get('/get-plastic', 'ApiController@getAllPlastic');