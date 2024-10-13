<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topping extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function pizzas()
    {
        return $this->belongsToMany(Pizza::class, 'pizza_topping');
    }
}
