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

Route::get('/', function () {

    $users = \App\User::all();
    $rank = [];
    $i = 0;
    foreach ($users as $user){
        $rank[$i]['name'] = $user->name;
        $rank[$i]['points'] = $user->allCountForUser();
        $i++;
    }

    usort($rank, function($a, $b) {
        return $b['points'] - $a['points'];
    });

    return view('welcome', compact('rank'));
});

Auth::routes();

Route::get('/home', 'HomeController@index');
Route::get('/mystats', 'HomeController@myStats');
Route::get('/stats', 'HomeController@globalStats');


Route::group(['middleware' => 'admin'], function (){
    Route::get('/admin', 'AdminController@index');
    Route::get('/admin/basket/create', 'AdminController@create');
    Route::post('/admin/basket/create', 'AdminController@store');
});