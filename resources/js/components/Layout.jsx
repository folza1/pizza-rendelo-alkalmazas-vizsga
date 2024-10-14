import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

import "./layout.css";

function Layout() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="sticky">
                {/* Rács a gombokhoz, sticky beállítások */}
                <div className="border d-flex flex-column flex-md-row justify-content-md-end header-my-green">
                    <Link to="/" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn btn-secondary fs-3 rounded-0 responsive-button border-bottom-custom"
                        >
                            Kezdőlap
                        </button>
                    </Link>

                    <Link to="/pizzas" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn btn-secondary fs-3 rounded-0 responsive-button border-bottom-custom"
                        >
                            Pizzák
                        </button>
                    </Link>

                    <Link to="/contact" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn btn-secondary fs-3 rounded-0 responsive-button border-bottom-custom"
                        >
                            Kapcsolat
                        </button>
                    </Link>

                    <Link to="/cart" className="mb-2 mb-md-0">
                        <button
                            type="button"
                            className="btn button-my-green-2 fs-3 rounded-0 responsive-button border-bottom-custom"
                        >
                            Kosár ({count})
                        </button>
                    </Link>
                </div>
            </div>

            <Outlet context={{ count, setCount }} />

            <div className="mt-5">
                <p className="text-center">© 2023 Pizzariánk</p>
            </div>
        </>
    );
}

export default Layout;
