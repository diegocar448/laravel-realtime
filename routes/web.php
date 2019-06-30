<?php



$this->router->group(['middleware' => 'auth'], function(){
    $this->router->get('chat', 'Chat\ChatController@index')->name('chat');
    $this->router->post('chat/message', 'Chat\ChatController@store');
});








Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
