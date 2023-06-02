<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SkateparksFeatures;

class SkateparksFeaturesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Fountain',
                'description' => 'Working fountain nearby the skatepark',
                'icon' => 'icons/fountain.png',
            ],
            [
                'name' => 'Bowl',
                'description' => 'It has a bowl in the skatepark',
                'icon' => 'icons/bowl.png',
            ],
            [
                'name' => 'Rail Flat',
                'description' => 'It has a flat rail in the skatepark',
                'icon' => 'icons/rail-flat.png',
            ],
            [
                'name' => 'Half',
                'description' => 'It has a halfpipe in the skatepark',
                'icon' => 'icons/halfpipe.png',
            ]
        ];

        // Insert the data into the table
        foreach ($data as $item) {
            SkateparksFeatures::create($item);
        }
    }
}
