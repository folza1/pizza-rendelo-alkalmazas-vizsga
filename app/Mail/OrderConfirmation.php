<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class OrderConfirmation extends Mailable
{
    use Queueable, SerializesModels;

    protected $cartItems;
    protected $formData;

    public function __construct($cartItems, $formData)
    {
        $this->cartItems = $cartItems;
        $this->formData = $formData;
    }

    public function build()
    {
        return $this->view('emails.order-confirmation')
            ->with([
                'cartItems' => $this->cartItems,
                'formData' => $this->formData,
            ]);
    }
}
