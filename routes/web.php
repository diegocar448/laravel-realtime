<?php





$this->router->get('chat', 'Chat\ChatController@index')->middleware('auth')->name('chat');





Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
