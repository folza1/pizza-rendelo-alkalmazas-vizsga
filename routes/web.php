<?php

use Illuminate\Support\Facades\Route;

use App\Models\Pizza;
use App\Models\Topping;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}', function () {

    return view('welcome');
    
    // Teszt
    // // Új pizza létrehozása

    // $margherita = Pizza::create([
    //     'name' => 'Margherita',
    //     'price' => 3500.00
    // ]);

    // $pepperoni = Pizza::create([
    //     'name' => 'Pepperoni',
    //     'price' => 3400.00
    // ]);

    // $hawaiian = Pizza::create([
    //     'name' => 'Hawaiian',
    //     'price' => 3450.00
    // ]);

    // $vegetarian = Pizza::create([
    //     'name' => 'Vegetáriánus',
    //     'price' => 3700.00
    // ]);

    // $bbq_chicken = Pizza::create([
    //     'name' => 'BBQ csirke',
    //     'price' => 3650.00
    // ]);

    // $four_cheese = Pizza::create([
    //     'name' => '4 Sajtos',
    //     'price' => 4000.00
    // ]);

    // $seafood = Pizza::create([
    //     'name' => 'Tenger gyümölcsei',
    //     'price' => 4100.00
    // ]);

    // $mexican = Pizza::create([
    //     'name' => 'Spicy Mexican',
    //     'price' => 4050.00
    // ]);

    // // Feltétek létrehozása (ha még nincsenek a DB-ben)
    // $topping1 = Topping::firstOrCreate(['name' => 'Mozzarella']);
    // $topping2 = Topping::firstOrCreate(['name' => 'Paradicsom']);
    // $topping3 = Topping::firstOrCreate(['name' => 'Bazsalikom']);
    // $topping4 = Topping::firstOrCreate(['name' => 'Pepperoni']);
    // $topping5 = Topping::firstOrCreate(['name' => 'Oregánó']);
    // $topping6 = Topping::firstOrCreate(['name' => 'Sonka']);
    // $topping7 = Topping::firstOrCreate(['name' => 'Ananász']);
    // $topping8 = Topping::firstOrCreate(['name' => 'Zöldpaprika']);
    // $topping9 = Topping::firstOrCreate(['name' => 'Gomba']);
    // $topping10 = Topping::firstOrCreate(['name' => 'Hagyma']);
    // $topping11 = Topping::firstOrCreate(['name' => 'Olivabogyó']);
    // $topping12 = Topping::firstOrCreate(['name' => 'Grillezett csirke']);
    // $topping13 = Topping::firstOrCreate(['name' => 'BBQ szósz']);
    // $topping14 = Topping::firstOrCreate(['name' => 'Piros hagyma']);
    // $topping15 = Topping::firstOrCreate(['name' => 'Kukorica']);
    // $topping16 = Topping::firstOrCreate(['name' => 'Cheddar']);
    // $topping17 = Topping::firstOrCreate(['name' => 'Kéksajt']);
    // $topping18 = Topping::firstOrCreate(['name' => 'Parmezán']);
    // $topping19 = Topping::firstOrCreate(['name' => 'Garnéla']);
    // $topping20 = Topping::firstOrCreate(['name' => 'Kagyló']);
    // $topping21 = Topping::firstOrCreate(['name' => 'Fokhagyma']);
    // $topping22 = Topping::firstOrCreate(['name' => 'Fűszeres kolbász']);
    // $topping23 = Topping::firstOrCreate(['name' => 'Jalapeno']);

    // // Hozzárendelés
    // $margherita->toppings()->attach([$topping1->id, $topping2->id, $topping3->id]);
    // $pepperoni->toppings()->attach([$topping4->id, $topping1->id, $topping5->id]);
    // $hawaiian->toppings()->attach([$topping6->id, $topping7->id, $topping1->id]);
    // $vegetarian->toppings()->attach([$topping8->id, $topping9->id, $topping10->id, $topping11->id, $topping1->id]);
    // $bbq_chicken->toppings()->attach([$topping12->id, $topping13->id, $topping14->id, $topping1->id, $topping15->id]);
    // $four_cheese->toppings()->attach([$topping1->id, $topping16->id, $topping17->id, $topping18->id]);
    // $seafood->toppings()->attach([$topping19->id, $topping20->id, $topping21->id, $topping1->id]);
    // $mexican->toppings()->attach([$topping22->id, $topping23->id, $topping14->id, $topping15->id, $topping1->id]);
});
