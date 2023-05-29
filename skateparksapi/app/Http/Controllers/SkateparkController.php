<?php

namespace App\Http\Controllers;

use App\Models\Skatepark;
use App\Http\Requests\StoreSkateparkRequest;
use App\Http\Requests\UpdateSkateparkRequest;

class SkateparkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSkateparkRequest $request)
    {
        // 
    }

    /**
     * Display the specified resource.
     */
    public function show(Skatepark $skatepark)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Skatepark $skatepark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSkateparkRequest $request, Skatepark $skatepark)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Skatepark $skatepark)
    {
        //
    }
}
