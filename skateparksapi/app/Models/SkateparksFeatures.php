<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkateparksFeatures extends Model
{
    use HasFactory;

    // Tabla
    protected $table = 'skatepark_features';

    // Datos que devuelve
    protected $fillable = [
        'name', 
        'description'
    ];

    public $timestamps = false;

    // Relacion
    public function skateparks()
    {
        return $this->hasMany(Skatepark::class);
    }
}
