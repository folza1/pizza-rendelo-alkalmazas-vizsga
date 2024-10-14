import React from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
    const { count } = useOutletContext();
    const { cartItems } = useCart();

    // Részösszegek összegének inicializálása
    let totalAmount = 0;

    return (
        <>
            <h1>Kosár</h1>
            <p>Pizzák száma a kosárban: {count}</p>

            <div>
                <h1>Kosár</h1>
                {cartItems.length === 0 ? (
                    <p>A kosár üres.</p>
                ) : (
                    <ul>
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
                                <li key={index}>
                                    {item.name} - {item.size} - {item.quantity}{" "}
                                    db -{adjustedPrice.toFixed(2)} Ft / db -
                                    Részösszeg:{" "}
                                    {(adjustedPrice * item.quantity).toFixed(2)}{" "}
                                    Ft
                                </li>
                            );
                        })}
                    </ul>
                )}
                {/* Összesített összeg kiírása */}
                <h2>Összesen: {totalAmount.toFixed(2)} Ft</h2>
            </div>
        </>
    );
}

export default Cart;
