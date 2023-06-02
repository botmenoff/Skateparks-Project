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
        // Obtenemos el user
        $user = auth()->user();
        // Creamos el skatepark
        $skatepark = Skatepark::create([
            'name' => $request->name,
            'description' => $request->description,
            'private' => $request->private,
            'features' => json_encode($request->features),
            'location' => $request->location,
            'photos' => $request->photos,
            'userid' => $user->id,
        ]);
        return $skatepark;
    }
}
