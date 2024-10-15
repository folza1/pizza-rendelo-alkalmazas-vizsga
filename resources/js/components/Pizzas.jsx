import { useOutletContext } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pizzas.css";

import { useCart } from "./CartContext"; // Kosár context importálása

function Pizzas() {
    const { count, setCount } = useOutletContext();
    const { addToCart } = useCart(); // Kosár context használata

    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    // Állapot a mennyiség tárolására
    const [quantity, setQuantity] = useState(1);

    const [size, setSize] = useState("L"); // Alapértelmezett érték az L méret

    const [sortOrder, setSortOrder] = useState(null); // Új állapot a rendezéshez

    const [searchTerm, setSearchTerm] = useState(""); // Keresés kifejezés tárolása
    const [filteredPizzas, setFilteredPizzas] = useState([]); // Szűrt pizzák tárolása

    const [currentPage, setCurrentPage] = useState(1);
    const [pizzasPerPage] = useState(3);

    const indexOfLastPizza = currentPage * pizzasPerPage;
    const indexOfFirstPizza = indexOfLastPizza - pizzasPerPage;
    const currentPizzas = filteredPizzas.slice(
        indexOfFirstPizza,
        indexOfLastPizza
    );

    useEffect(() => {
        // Axios hívás az API-ra
        axios
            .get("/api/pizzas")
            .then((response) => {
                setPizzas(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Hiba történt az adatok lekérésekor:", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Szűrés, ha változik a keresési kifejezés
        const filtered = pizzas.filter((pizza) =>
            pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPizzas(filtered);
    }, [searchTerm, pizzas]); // Figyeli a keresési kifejezést és a pizzák állapotát

    if (loading) {
        return <div>Adatok betöltése...</div>;
    }

    const incrementCount = () => {
        setCount(count + quantity);
    };

    // Pizza rendezésének kezelése ár szerint növekvőn
    const sortPizzasByPriceAscending = () => {
        const sortedPizzas = [...pizzas].sort((a, b) => a.price - b.price);
        setPizzas(sortedPizzas);
        setSortOrder("price-asc");
    };

    const sortPizzasByPriceDescending = () => {
        const sortedPizzas = [...pizzas].sort((a, b) => b.price - a.price);
        setPizzas(sortedPizzas);
    };

    const sortPizzasByNameAscending = () => {
        const sortedPizzas = [...pizzas].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setPizzas(sortedPizzas);
    };

    const sortPizzasByNameDescending = () => {
        const sortedPizzas = [...pizzas].sort((a, b) =>
            b.name.localeCompare(a.name)
        );
        setPizzas(sortedPizzas);
    };

    const sortPizzasByLikesAscending = () => {
        const sortedPizzas = [...pizzas].sort((a, b) => a.likes - b.likes);
        setPizzas(sortedPizzas);
    };

    const sortPizzasByLikesDescending = () => {
        const sortedPizzas = [...pizzas].sort((a, b) => b.likes - a.likes);
        setPizzas(sortedPizzas);
    };

    // Keresés funkció a keresett kifejezés alapján
    const handleSearch = () => {
        if (searchTerm.trim()) {
            const filteredPizzas = pizzas.filter((pizza) =>
                pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setPizzas(filteredPizzas);
        }
    };

    const handleAddToCart = (pizza) => {
        addToCart(pizza, size, quantity); // Pizza hozzáadása a kosárhoz a mérettel és mennyiséggel
        incrementCount(); // Számláló frissítése
        setQuantity(1);
    };

    return (
        <>
            <h3 className="text-center my-5">Pizza Keresése</h3>

            <div className="row mb-4">
                <div className="col-6 mx-auto">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Keresés pizzanév alapján..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} // Szűrés valós időben
                        />
                    </div>
                </div>
            </div>

            <h1 className="text-center my-5">Kínálatunk</h1>
            <hr className="my-5" />

            <div className="col-6 my-3 mx-auto">
                <h4>Pizzák rendezése:</h4>
            </div>

            <div className="col-6 my-3 mx-auto">
                <div className="d-flex flex-wrap">
                    {/* Ár szerint gombok */}
                    <div className="d-flex flex-row w-100">
                        <button
                            className="btn bg-gray m-1 rounded-0 w-50 button-border-2"
                            onClick={sortPizzasByPriceAscending}
                        >
                            Ár szerint növekvő
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-up ml-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.146a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 4.707V11.5A.5.5 0 0 0 8 12z"
                                />
                            </svg>
                        </button>
                        <button
                            className="btn bg-gray m-1 rounded-0 w-50 button-border-2"
                            onClick={sortPizzasByPriceDescending}
                        >
                            Ár szerint csökkenő
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down ml-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v6.293l3.147-3.146a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 10.793V4.5A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Név szerint gombok */}
                    <div className="d-flex flex-row w-100">
                        <button
                            className="btn bg-gray m-1 rounded-0 w-50 button-border-2"
                            onClick={sortPizzasByNameAscending}
                        >
                            Név szerint növekvő
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-up ml-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.146a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 4.707V11.5A.5.5 0 0 0 8 12z"
                                />
                            </svg>
                        </button>
                        <button
                            className="btn bg-white m-1 rounded-0 w-50 button-border-2"
                            onClick={sortPizzasByNameDescending}
                        >
                            Név szerint csökkenő
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down ml-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v6.293l3.147-3.146a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 10.793V4.5A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Népszerűség szerint gombok */}
                    <div className="d-flex flex-row w-100">
                        <button
                            className="btn bg-gray m-1 rounded-0 w-50 button-border-2"
                            onClick={sortPizzasByLikesAscending}
                        >
                            Népszerűség szerint növekvő
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-up ml-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 12a.5.5 0 0 0 .5-.5V4.707l3.147 3.146a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 4.707V11.5A.5.5 0 0 0 8 12z"
                                />
                            </svg>
                        </button>
                        <button
                            className="btn bg-gray m-1 rounded-0 w-50 button-border-2"
                            onClick={sortPizzasByLikesDescending}
                        >
                            Népszerűség szerint csökkenő
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-down ml-1"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v6.293l3.147-3.146a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 10.793V4.5A.5.5 0 0 1 8 4z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container">
                {currentPizzas.map((pizza, index) => {
                    // Összeg kiszámítása a méret alapján
                    let priceMultiplier = 1; // Alapértelmezett szorzó

                    if (size === "XL") {
                        priceMultiplier = 1.25; // XL méret esetén
                    } else if (size === "XXL") {
                        priceMultiplier = 1.5; // XXL méret esetén
                    }

                    const totalPrice = pizza.price * quantity * priceMultiplier; // Összeg kiszámítása

                    return (
                        <div
                            key={index}
                            className="row justify-content-center my-4"
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
                                                        width="24"
                                                        height="24"
                                                        style={{
                                                            marginRight: "8px",
                                                            verticalAlign:
                                                                "middle",
                                                        }}
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
                                                    style={{ fontSize: "3rem" }}
                                                ></span>
                                            ))}
                                        </div>

                                        <div>
                                            <h3 className="my-3">
                                                Összesen: {totalPrice} Ft
                                            </h3>

                                            <form>
                                                <div className="my-3">
                                                    <h4>Válassz méretet:</h4>
                                                    <div className="form-check">
                                                        <input
                                                            type="radio"
                                                            id={`sizeL-${index}`} // Egyedi ID az L mérethez
                                                            name={`size-${index}`} // Egyedi name a csoporthoz
                                                            className="form-check-input"
                                                            value="L"
                                                            checked={
                                                                size === "L"
                                                            }
                                                            onChange={() =>
                                                                setSize("L")
                                                            }
                                                        />
                                                        <label
                                                            htmlFor={`sizeL-${index}`}
                                                            className="form-check-label"
                                                        >
                                                            L
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="radio"
                                                            id={`sizeXL-${index}`} // Egyedi ID az XL mérethez
                                                            name={`size-${index}`} // Egyedi name a csoporthoz
                                                            className="form-check-input"
                                                            value="XL"
                                                            checked={
                                                                size === "XL"
                                                            }
                                                            onChange={() =>
                                                                setSize("XL")
                                                            }
                                                        />
                                                        <label
                                                            htmlFor={`sizeXL-${index}`}
                                                            className="form-check-label"
                                                        >
                                                            XL
                                                        </label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            type="radio"
                                                            id={`sizeXXL-${index}`} // Egyedi ID az XXL mérethez
                                                            name={`size-${index}`} // Egyedi name a csoporthoz
                                                            className="form-check-input"
                                                            value="XXL"
                                                            checked={
                                                                size === "XXL"
                                                            }
                                                            onChange={() =>
                                                                setSize("XXL")
                                                            }
                                                        />
                                                        <label
                                                            htmlFor={`sizeXXL-${index}`}
                                                            className="form-check-label"
                                                        >
                                                            XXL
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex align-items-center mt-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-warning fs-3 rounded-0 btn-lg border-black-2"
                                                        onClick={() =>
                                                            handleAddToCart(
                                                                pizza
                                                            )
                                                        } // Hozzáadás a kosárhoz
                                                    >
                                                        Kosárba
                                                    </button>
                                                    <input
                                                        type="number"
                                                        className="form-control me-2 mx-2"
                                                        min="1"
                                                        value={quantity}
                                                        onChange={(e) =>
                                                            setQuantity(
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                )
                                                            )
                                                        }
                                                        style={{
                                                            width: "70px",
                                                            height: "60px",
                                                        }}
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="pagination d-flex justify-content-center my-3">
                    {Array.from(
                        {
                            length: Math.ceil(
                                filteredPizzas.length / pizzasPerPage
                            ),
                        },
                        (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => setCurrentPage(index + 1)}
                                disabled={currentPage === index + 1}
                                className="btn btn-warning mx-1" // vagy bármilyen más gombstílus
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            </div>
        </>
    );
}

export default Pizzas;
