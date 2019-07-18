<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserCOntroller extends Controller
{
    public function profile()
    {
        return view('view.profile');
    }
}
