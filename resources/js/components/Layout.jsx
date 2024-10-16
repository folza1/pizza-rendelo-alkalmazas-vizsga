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

            <div className="mt-5">
                <p className="text-center">© 2023 Pizzériánk</p>
            </div>
        </>
    );
}

export default Layout;
