<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kapcsolatfelvétel Üzenet</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        .container {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            padding: 30px;
            max-width: 600px;
            margin: auto;
        }

        h3 {
            color: #5a5a5a;
            font-size: 24px;
            margin-bottom: 20px;
        }

        .info {
            margin-bottom: 15px;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 4px solid #a5c1e7;
            border-radius: 5px;
        }

        .info strong {
            color: #4a4a4a;
        }

        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #999;
            text-align: center;
        }

        .footer a {
            color: #a5c1e7;
            text-decoration: none;
        }

        .footer a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container">
        <h3>Új üzenet érkezett a kapcsolatfelvételi űrlapról!</h3>

        <div class="info">
            <strong>Név:</strong> {{ $formData['name'] }}
        </div>
        <div class="info">
            <strong>Email:</strong> {{ $formData['email'] }}
        </div>
        <div class="info">
            <strong>Üzenet:</strong>
            <p>{{ $formData['message'] }}</p>
        </div>

        <div class="footer">
            Köszönjük, hogy felvette velünk a kapcsolatot! <br>
            Az üzenetet a rendszerünk automatikusan generálta.
        </div>
    </div>
</body>

</html>