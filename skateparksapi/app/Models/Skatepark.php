<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skatepark extends Model
{
    use HasFactory;

    // Tabla
    protected $table = 'skateparks';

    // Datos que devuelve
    protected $fillable = [
        'name',
        'description',
        'private',
        'features',
        'location',
        'photos',
        'userid',
    ];

    // Relaciones
    public function features()
    {
        return $this->belongsTo(SkateparkFeatures::class, 'features', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userid', 'id');
    }
}
