<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\User;


class UserController extends Controller
{
    public function profile()
    {
      

        return view('users.profile');
    }

    public function profileUpdate(Request $request)
    {        

        //dd($request->all());

        $user = auth()->user();
        $data = $request->all();

        if($request->email)
        {
            unset($data['email']);
        }

        if($request->password)
        {
            $data['password'] = bcrypt($data['password']);
        }else{
            unset($data['password']);
        }

        //validar a imagem do usuario

        //verificar se a pessoa estao enviando uma imagem
        if($request->hasFile('image') && $request->file('image')->isValid())
        {
            //dd($request->image);
            $name = kebab_case($request->name).uniqid($user->id); //diego-cardoso

            $extension = $request->image->extension();

            $nameImage = "{$name}.{$extension}";


            $data['image'] = $nameImage;

            //Criar uma pasta com o nome users + imagem
            $upload = $request->image->storeAs('users', $nameImage);

            if(!$upload)
            {
                return redirect()
                    ->route('profile')
                    ->with('error', 'Falha ao fazer o upload');
            }

        }

        

        $user->update($data);

        return redirect()
                        ->route('profile')
                        ->with('success', 'Atualizado com Sucesso!');
    }
}
