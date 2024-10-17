<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ContactController extends Controller
{
    public function validateMessage(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string|max:500',
        ], [
            'name.required' => 'A név megadása kell.',
            'name.max' => 'A vezetéknév maximum 255 karakter lehet.',
            'email.required' => 'Az email cím megadása kell.',
            'email.email' => 'A megadott email nem helyes.',
            'message.required' => 'A üzenet megadása kell.',
            'message.max' => 'A üzenet maximum 500 karakter lehet.',
        ]);

        // Sikeres validálás után rendelés logika...
        return response()->json(['message' => 'Az üzenet sikeresen elküldve!'], 200);
    }

    public function sendEmail(Request $request)
    {
        $formData = $request->all();

        Mail::to($formData['email'])->send(new ContactMail($formData));


        return response()->json(['message' => 'Email sent successfully!'], 200);
    }
}
