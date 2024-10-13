import React from "react";
import { useOutletContext } from "react-router-dom";

function Cart() {
    const { count } = useOutletContext();

    return (
        <>
            <h1>Kosár</h1>
            <p>Pizzák száma a kosárban: {count}</p>
        </>
    );
}

export default Cart;
