<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpotsFeatures extends Model
{
    use HasFactory;

    protected $table = 'spot-features';

    protected $fillable = [
        'name',
        'description',
    ];


    public function spots()
    {
        return $this->hasMany(Spot::class, 'features');
    }
}
