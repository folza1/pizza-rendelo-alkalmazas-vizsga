<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Pizza;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/pizzas', function () {
    // Lekérés a pizzákról a feltétekkel együtt
    $pizzas = Pizza::with('toppings')->get();

    return response()->json($pizzas);
});
