import React from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";
import "./cart.css";

function Cart() {
    const { count, setCount } = useOutletContext();
    const { cartItems, clearCart, removeItem } = useCart(); // Add removeItem from context

    // Részösszegek összegének inicializálása
    let totalAmount = 0;

    const handleClearCart = () => {
        clearCart(); // Kosár kiürítése a contextben
        setCount(0); // A count nullázása
    };

    const handleRemoveItem = (index) => {
        removeItem(index); // Remove item from cart by index
        setCount((prevCount) => prevCount - cartItems[index].quantity); // Update count
    };

    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-10 border">
                    <div className="text-center">
                        <h1>Kosár</h1>
                        {count > 0 && ( // Csak akkor jelenik meg, ha a count > 0
                            <>
                                <h3>Pizzák száma a kosárban: {count}</h3>
                                <button
                                    className="btn btn-danger mt-3 rounded-0 fs-4"
                                    onClick={handleClearCart} // Kosár ürítése és count nullázása
                                >
                                    Kosár ürítése
                                </button>
                            </>
                        )}
                    </div>

                    <div className="mt-4 custom-container">
                        {cartItems.length === 0 ? (
                            <div
                                className="alert alert-primary rounded-0"
                                role="alert"
                            >
                                A kosár üres.
                            </div>
                        ) : (
                            <div>
                                <ul className="list-group">
                                    {cartItems.map((item, index) => {
                                        // Alapár, számra konvertálva
                                        let basePrice = Number(item.price);

                                        // Árkalkuláció a méret alapján
                                        let adjustedPrice = basePrice;

                                        if (item.size === "XL") {
                                            adjustedPrice *= 1.25;
                                        } else if (item.size === "XXL") {
                                            adjustedPrice *= 1.5;
                                        }

                                        // Részösszeg hozzáadása az összesített összeghez
                                        totalAmount +=
                                            adjustedPrice * item.quantity;

                                        return (
                                            <li
                                                key={index}
                                                className="list-group-item d-flex justify-content-between align-items-center"
                                            >
                                                <div>
                                                    <h5 className="mb-1">
                                                        {item.name}
                                                    </h5>
                                                    <p className="mb-1">
                                                        Méret: {item.size}
                                                    </p>
                                                    <p className="mb-1">
                                                        Mennyiség:{" "}
                                                        {item.quantity} db
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="mb-1">
                                                        Ár:{" "}
                                                        {Math.round(
                                                            adjustedPrice
                                                        )}{" "}
                                                        Ft / db
                                                    </p>
                                                    <p className="mb-1">
                                                        Részösszeg:{" "}
                                                        {Math.round(
                                                            adjustedPrice *
                                                                item.quantity
                                                        )}{" "}
                                                        Ft
                                                    </p>
                                                </div>
                                                <button
                                                    className="btn btn-danger rounded-0"
                                                    onClick={() =>
                                                        handleRemoveItem(index)
                                                    } // Remove item
                                                >
                                                    Töröl
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                                {/* Összesített összeg kiírása */}
                                <h2 className="mt-4">
                                    Összesen: {Math.round(totalAmount)} Ft
                                </h2>
                            </div>
                        )}
                    </div>

                    <div className="text-center mt-4">
                        {count > 0 && (
                            <>
                                <button
                                    className="btn btn-danger mt-3 rounded-0 fs-4"
                                    onClick={handleClearCart}
                                >
                                    Kosár ürítése
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
