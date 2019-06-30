<?php

namespace App\Http\Controllers\Chat;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChatController extends Controller
{
    public function index()
    {
        return view('chat.index');
    }

    public function store(Request $request)
    {
        $message = auth()->user()->messages()->create([
            'body' => $request->body
        ]);

        return response()->json($message, 201);
    }
}
