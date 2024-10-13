import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";

function Pizzas() {
    // useOutletContext használata a Layout-ból jövő state és setter eléréséhez
    const { count, setCount } = useOutletContext();

    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Axios hívás az API-ra
        axios
            .get("/api/pizzas")
            .then((response) => {
                // Az API válaszát az állapotba tesszük
                setPizzas(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Hiba történt az adatok lekérésekor:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Adatok betöltése...</div>;
    }

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>Pizzák</h1>
            <p>Aktuális szám: {count}</p>
            <button onClick={incrementCount} className="btn btn-primary">
                Növelés
            </button>

            <div>
                <h1>Pizzák</h1>
                {pizzas.map((pizza) => (
                    <div key={pizza.id}>
                        <img src={pizza.image} alt={pizza.name} />
                        <ul>
                            <li>
                                <h2>{pizza.name}</h2>
                                <h3>{pizza.id}</h3>
                                <p>Ár: {pizza.price} Ft</p>
                                <h3>Feltétek:</h3>
                                <ul>
                                    {pizza.toppings.map((topping) => (
                                        <li key={topping.id}>{topping.name}</li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Pizzas;
