import { Outlet, Link } from "react-router-dom";
import "./layout.css";

function Layout() {
    return (
        <>
            <div>
                <div className="border d-flex justify-content-end">
                    <button type="button" className="btn btn-success fs-3">
                        <Link to="/" className="custom-link">
                            Kezdőlap
                        </Link>
                    </button>
                    <button type="button" className="btn btn-secondary fs-3">
                        <Link to="/pizzas" className="custom-link">
                            Pizzák
                        </Link>
                    </button>
                    <button type="button" className="btn btn-danger fs-3">
                        <Link to="/contact" className="custom-link">
                            Kapcsolat
                        </Link>
                    </button>
                    <button type="button" className="btn btn-warning fs-3">
                        <Link to="/cart" className="custom-link">
                            Kosár
                        </Link>
                    </button>
                </div>
            </div>

            <Outlet />
        </>
    );
}

export default Layout;
