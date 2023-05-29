<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

class UserController extends Controller
{
    // Register
    public function register(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|unique:users,name',
                'email' => 'required|string|email|unique:users,email',
                'password' => 'required|min:8|string',
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

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            //'height' => $request->height,
            //'weight' => $request->weight,
            //'sleepHours' => $request->sleepHours
        ]);

        return response()->json($user, 201);
    }

    // Login
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
 
        if (Auth::attempt($credentials)) {
            // Create token and return user with token

            // Seteamos la fecha del carbon
            $expiresIn = Carbon::now()->addDays(2)->toDateTimeString();
            // Se lo "injectamos" al token 
            $user = Auth::user();
            $token = $user->createToken('token-name', ['expires_in' => $expiresIn])->plainTextToken;    
            $res = ["token" => $token];
            return response()->json($res);
        } else {
            $res = ["errors" => "Credentials don't match"];
            return response()->json($res);
        }
 
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}
