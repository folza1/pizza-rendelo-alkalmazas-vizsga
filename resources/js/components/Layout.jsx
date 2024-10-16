import { Outlet, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./layout.css";

function Layout() {
    // Kezdeti érték betöltése a localStorage-ből
    const getInitialCount = () => {
        const storedCount = localStorage.getItem("cartCount");
        return storedCount ? JSON.parse(storedCount) : 0;
    };

    const [count, setCount] = useState(getInitialCount);

    // Ha a count értéke változik, frissíteni kell a localStorage-ben is
    useEffect(() => {
        localStorage.setItem("cartCount", JSON.stringify(count));
    }, [count]);

    return (
        <>
            <div className="sticky header-border p-1">
                <div className="d-flex flex-column flex-md-row justify-content-md-end header-my-green">
                    <Link to="/" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn header-my-green border-x fs-3 rounded-0 responsive-button"
                        >
                            Kezdőlap
                        </button>
                    </Link>

                    <Link to="/pizzas" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn header-my-green border-x fs-3 rounded-0 responsive-button"
                        >
                            Pizzák
                        </button>
                    </Link>

                    <Link to="/contact" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn header-my-green border-x fs-3 rounded-0 responsive-button"
                        >
                            Kapcsolat
                        </button>
                    </Link>

                    <Link to="/cart" className="mb-2 mb-md-0">
                        <button
                            type="button"
                            className="btn button-my-green-2 fs-3 rounded-0 responsive-button"
                        >
                            <span className="color-black">Kosár ({count})</span>
                        </button>
                    </Link>
                </div>
            </div>

            <Outlet context={{ count, setCount }} />

            <footer class="bg-dark text-white pt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5>Pizza Rendelő</h5>
                            <p>
                                1234 Budapest, Pizzéria utca 5.
                                <br />
                                Telefonszám: +36 1 234 5678
                            </p>
                        </div>

                        <div class="col-md-4">
                            <h5>Nyitvatartás</h5>
                            <ul class="list-unstyled">
                                <li>Hétfő - Péntek: 10:00 - 22:00</li>
                                <li>Szombat: 12:00 - 23:00</li>
                                <li>Vasárnap: Zárva</li>
                            </ul>
                        </div>

                        <div class="col-md-4">
                            <h5>Kövess minket</h5>
                            <div>
                                <a href="#" class="text-white me-3">
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a href="#" class="text-white me-3">
                                    <i class="bi bi-instagram"></i>
                                </a>
                                <a href="#" class="text-white me-3">
                                    <i class="bi bi-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <hr class="my-4" />

                    <div class="text-center py-5">
                        <p class="mb-0">
                            &copy; 2024 Pizza Rendelő. Minden jog fenntartva.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Layout;
