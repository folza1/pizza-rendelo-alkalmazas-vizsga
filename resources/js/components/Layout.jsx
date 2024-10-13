import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

import "./layout.css";

function Layout() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                {/* Rács a gombokhoz */}
                <div className="border d-flex flex-column flex-md-row justify-content-md-end">
                    <Link to="/" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn btn-success fs-3 rounded-0 responsive-button"
                        >
                            Kezdőlap
                        </button>
                    </Link>

                    <Link to="/pizzas" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn btn-secondary fs-3 rounded-0 responsive-button"
                        >
                            Pizzák
                        </button>
                    </Link>

                    <Link to="/contact" className="mb-2 mb-md-0 me-md-2">
                        <button
                            type="button"
                            className="btn btn-danger fs-3 rounded-0 responsive-button"
                        >
                            Kapcsolat
                        </button>
                    </Link>

                    <Link to="/cart" className="mb-2 mb-md-0">
                        <button
                            type="button"
                            className="btn btn-warning fs-3 rounded-0 responsive-button"
                        >
                            Kosár ({count})
                        </button>
                    </Link>
                </div>
            </div>

            <Outlet context={{ count, setCount }} />
        </>
    );
}

export default Layout;
