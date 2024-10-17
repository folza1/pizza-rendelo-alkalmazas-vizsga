<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sikeres Rendelés!</title>
    <style>
        /* Stílusok az emailhez */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .container {
            background-color: #ffffff;
            width: 80%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #e74c3c;
            text-align: center;
        }

        p {
            font-size: 16px;
            color: #333;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        ul li {
            background-color: #f9f9f9;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        ul li:nth-child(odd) {
            background-color: #f0f0f0;
        }

        ul li span {
            font-weight: bold;
        }

        .total-amount {
            font-size: 18px;
            font-weight: bold;
            color: #2ecc71;
            text-align: right;
        }

        .footer {
            text-align: center;
            margin-top: 20px;
            color: #888;
        }

        .footer a {
            color: #3498db;
            text-decoration: none;
        }

        .address-details {
            margin-top: 20px;
            font-size: 16px;
        }
    </style>
</head>

<body>
    @php
    // Biztosítjuk, hogy a totalAmount inicializálva legyen
    $totalAmount = 0;
    @endphp

    <div class="container">
        <h1>Sikeres Rendelés!</h1>
        <p><b>Kedves {{ $formData['firstName'] }} {{ $formData['lastName'] }},</b></p>
        <p>Köszönjük, hogy a Pizza Rendelőt választotta!</p>

        <h2>Rendelési részletek:</h2>
        <ul>
            @foreach($cartItems as $item)
            @php
            $basePrice = $item['price'];
            $adjustedPrice = $basePrice;

            if ($item['size'] === "XL") {
            $adjustedPrice *= 1.25;
            } elseif ($item['size'] === "XXL") {
            $adjustedPrice *= 1.5;
            }

            $subtotal = $adjustedPrice * $item['quantity']; // Részösszeg kiszámítása
            $totalAmount += $subtotal; // Teljes összeghez hozzáadjuk a részösszeget
            @endphp
            <li>
                <span>{{ $item['name'] }}</span> - {{ $item['quantity'] }} db -
                {{ number_format($adjustedPrice, 0, ',', ' ') }} Ft/db
                <br> Részösszeg: {{ number_format($subtotal, 0, ',', ' ') }} Ft
            </li>
            @endforeach
        </ul>

        <p class="total-amount">Végösszeg: {{ number_format($totalAmount, 0, ',', ' ') }} Ft</p>

        <div class="address-details">
            <h2>Kiszállítási cím:</h2>
            <p>{{ $formData['zip'] }} {{ $formData['city'] }}, {{ $formData['address'] }}</p>
        </div>

        <p class="footer">Ha bármilyen kérdése van, ne habozzon kapcsolatba lépni velünk! <br>
            <a href="mailto:info@pizzarendelo.hu">info@pizzarendelo.hu</a>
        </p>
    </div>
</body>

</html>