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

                                    <h4 className="my-3">Feltétek:</h4>
                                    <ul className="list-unstyled">
                                        {pizza.toppings.map((topping) => (
                                            <li
                                                key={topping.id}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    width="24" // Állítsd be a kívánt szélességet (pl. 24px)
                                                    height="24" // Állítsd be a kívánt magasságot (pl. 24px)
                                                    style={{
                                                        marginRight: "8px",
                                                        verticalAlign: "middle",
                                                    }} // Kicsi távolság a szöveg előtt
                                                >
                                                    <path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                                                </svg>
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

                                    <div className="d-flex align-items-center mt-3">
                                        <button className="btn btn-warning fs-3 rounded-0 btn-lg border-black-2">
                                            Kosárba
                                        </button>
                                        <input
                                            type="number"
                                            className="form-control me-2 mx-2"
                                            min="1"
                                            defaultValue="1"
                                            style={{
                                                width: "70px",
                                                height: "60px",
                                            }} // Magasság beállítása a gomb magasságával
                                        />
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
