<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function placeOrder(Request $request)
    {
        // Validációs szabályok
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'phone' => 'required|string',
            'zip' => 'required|string|max:4|min:4',
            'city' => 'required|string|max:255',
            'address' => 'required|string|max:500',
            'email' => 'required|email',
            'terms' => 'accepted', // Kell hogy elfogadott legyen
            'privacy' => 'accepted', // Kell hogy elfogadott legyen
        ], [
            'firstName.required' => 'A vezetéknév megadása kötelező.',
            'firstName.max' => 'A vezetéknév maximum 255 karakter lehet.',
            'lastName.required' => 'A keresztnev megadása kötelező.',
            'lastName.max' => 'A keresztnev maximum 255 karakter lehet.',
            'phone.required' => 'A telefonszám megadása kötelező.',
            'zip.required' => 'A postcode megadása kötelező.',
            'zip.max' => 'A postcode maximum 4 karakter lehet.',
            'zip.min' => 'A postcode minimum 4 karakter lehet.',
            'city.required' => 'A telepules megadása kötelező.',
            'city.max' => 'A telepules maximum 255 karakter lehet.',
            'address.required' => 'A cím megadása kötelező.',
            'address.max' => 'A cím maximum 500 karakter lehet.',
            'email.required' => 'Az email cím megadása kötelező.',
            'email.email' => 'A megadott email nem helyes.',
            'terms.accepted' => 'El kell fogadni az ÁSZF-et!',
            'privacy.accepted' => 'El kell fogadni az Adatvédelmi Szabályzatot!',
        ]);

        // Sikeres validálás után rendelés logika...
        return response()->json(['message' => 'A megrendelés sikeresen leadva!'], 200);
    }

    public function sendEmail(Request $request)
    {
        $cartItems = $request->cartItems;
        $formData = $request->formData;

        // Logic to send email with cartItems and formData
        // ...

        return response()->json(['message' => 'Email sent successfully!'], 200);
    }
}
