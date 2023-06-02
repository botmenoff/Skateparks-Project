<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    use HasFactory;

    // Tabla
    protected $table = 'spots';

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
    public function feature()
    {
        return $this->belongsTo(SpotFeature::class, 'features');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'userid');
    }
}
