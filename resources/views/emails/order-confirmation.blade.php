<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sikeres Rendelés!</title>
</head>

<body>
    <h1>Sikeres Rendelés!</h1>
    <p>Kedves {{ $formData['firstName'] }} {{ $formData['lastName'] }}</p>
    <p>Köszönjük, hogy a Pizza Rendelőt választotta!</p>
    <h2>Rendelési részletek:</h2>
    <ul>
        @foreach($cartItems as $item)
        <li>{{ $item['name'] }} - {{ $item['quantity'] }} db</li>
        @endforeach
    </ul>
    <p>Ha bármilyen kérdése van, ne habozzon kapcsolatba lépni velünk!</p>
</body>

</html>