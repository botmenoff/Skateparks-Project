<?php

namespace App\Http\Controllers;

use App\Models\Skatepark;
use App\Http\Requests\StoreSkateparkRequest;
use App\Http\Requests\UpdateSkateparkRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SkateparkController extends Controller
{
    public function create (Request $request) 
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|unique:skateparks,name',
                'description' => 'required|string|min:10|max:255',
                'private' => 'required|boolean',
                'favourite' => 'required|boolean',
                'features'
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
