import React from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "./CartContext";

function Cart() {
    const { count } = useOutletContext();
    const { cartItems } = useCart();

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
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - {item.size} - {item.quantity} db -
                                {item.price} Ft / db - Összesen:{" "}
                                {item.price * item.quantity} Ft
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

export default Cart;
