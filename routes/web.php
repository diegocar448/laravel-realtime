<?php



$this->router->group(['middleware' => 'auth'], function(){
    $this->router->get('chat', 'Chat\ChatController@index')->name('chat');
    $this->router->get('chat/messages', 'Chat\ChatController@messages');

    $this->router->post('chat/message', 'Chat\ChatController@store');

    $this->router->get('meu-perfil', 'User\UserController@profile')->name('profile');

});








Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
