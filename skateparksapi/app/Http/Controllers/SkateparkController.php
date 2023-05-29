<?php

namespace App\Http\Controllers;

use App\Models\Skatepark;
use App\Http\Requests\StoreSkateparkRequest;
use App\Http\Requests\UpdateSkateparkRequest;
use Illuminate\Http\Request;

class SkateparkController extends Controller
{
    public function create (Request $request) 
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|unique:users,name',
                'description' => 'required|string|email|unique:users,email',
                'private' => 'required|min:8|string',
                // El same|campo se puede utilizar en otros ambitos 
                'password_confirmation' => 'required|same:password'
            ]
        );

        if ($validator->fails()) {
            return response([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
                'errors' => $validator->errors()
            ], 400);
        }
    }
}
