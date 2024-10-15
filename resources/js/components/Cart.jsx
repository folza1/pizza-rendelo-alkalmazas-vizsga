import React from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
    const { count, setCount } = useOutletContext();
    const { cartItems, clearCart } = useCart();

    // Részösszegek összegének inicializálása
    let totalAmount = 0;

    const handleClearCart = () => {
        clearCart(); // Kosár kiürítése a contextben
        setCount(0); // A count nullázása
    };

    return (
        <>
            <div className="container mt-4 text-center">
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

            <div className="container mt-4">
                {cartItems.length === 0 ? (
                    <div className="alert alert-primary" role="alert">
                        A kosár üres.
                    </div>
                ) : (
                    <div>
                        <ul className="list-group">
                            {cartItems.map((item, index) => {
                                // Alapár, számra konvertálva
                                let basePrice = Number(item.price); // Győződj meg róla, hogy szám

                                // Árkalkuláció a méret alapján
                                let adjustedPrice = basePrice; // Alapár

                                if (item.size === "XL") {
                                    adjustedPrice *= 1.25; // XL méret esetén
                                } else if (item.size === "XXL") {
                                    adjustedPrice *= 1.5; // XXL méret esetén
                                }

                                // Részösszeg hozzáadása az összesített összeghez
                                totalAmount += adjustedPrice * item.quantity;

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
                                                Mennyiség: {item.quantity} db
                                            </p>
                                        </div>
                                        <div>
                                            <p className="mb-1">
                                                Ár: {adjustedPrice.toFixed(2)}{" "}
                                                Ft / db
                                            </p>
                                            <p className="mb-1">
                                                Részösszeg:{" "}
                                                {(
                                                    adjustedPrice *
                                                    item.quantity
                                                ).toFixed(2)}{" "}
                                                Ft
                                            </p>
                                        </div>
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

            <div className="container mt-4 text-center">
                {count > 0 && ( // Csak akkor jelenik meg, ha a count > 0
                    <>
                        <button
                            className="btn btn-danger mt-3 rounded-0 fs-4"
                            onClick={handleClearCart} // Kosár ürítése és count nullázása
                        >
                            Kosár ürítése
                        </button>
                    </>
                )}
            </div>
        </>
    );
}

export default Cart;
