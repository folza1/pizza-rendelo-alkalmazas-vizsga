import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";

import axios from "axios";
import "./pizzas.css";

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

            {/* <div>
                <h1>Pizzák</h1>
                {pizzas.map((pizza) => (
                    <div key={pizza.id}>
                        <img src={pizza.image} alt={pizza.name} />
                        <ul>
                            <li>
                                <h2>{pizza.name}</h2>
                                <h3>{pizza.id}</h3>
                                <h4>{pizza.likes} Likes</h4>

                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        className={`fa fa-star ${
                                            index < pizza.likes ? "checked" : ""
                                        }`}
                                    ></span>
                                ))}

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
            </div> */}

            <h1 className="text-center my-5">Kínálatunk</h1>

            <hr className="my-5"></hr>

            <div className="container">
                {pizzas.map((pizza, index) => (
                    <div
                        key={index}
                        className="row justify-content-center mb-4"
                    >
                        <div className="col-8 mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={pizza.image}
                                        alt={pizza.name}
                                        className="img-fluid"
                                        style={{
                                            width: "100%",
                                            height: "400px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <h2 className="card-title mt-3">
                                        {pizza.name}
                                    </h2>

                                    <h6>Feltétek:</h6>
                                    <ul>
                                        {pizza.toppings.map((topping) => (
                                            <li key={topping.id}>
                                                {topping.name}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="text-center mt-3">
                                        {[...Array(5)].map((_, index) => (
                                            <span
                                                key={index}
                                                className={`fa fa-star ${
                                                    index < pizza.likes
                                                        ? "checked"
                                                        : ""
                                                }`}
                                                style={{ fontSize: "3rem" }} // Háromszoros méret
                                            ></span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Pizzas;
