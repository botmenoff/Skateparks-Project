<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class ValidateSkatepark
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Valido los campos
        $validator = Validator::make(
            $request->all(),
            [
                'name' => 'required|string|unique:skateparks,name',
                'description' => 'required|string|min:10|max:255',
                'private' => 'required|boolean'
            ]
        );

        if ($validator->fails()) {
            return response([
                'name' => $request->name,
                'description' => $request->description,
                'private' => $request->private,
                'errors' => $validator->errors()
            ], 400);
        } else {
            return $next($request);
        }
        
    }
}
