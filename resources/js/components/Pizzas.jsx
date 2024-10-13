import React, { useState } from "react";

function Pizzas() {
    // State létrehozása, kezdeti értéke 0
    const [count, setCount] = useState(0);

    // Függvény a számláló növelésére
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h1>Pizzák</h1>
            <p>Aktuális szám: {count}</p>
            <button onClick={incrementCount} className="btn btn-primary">
                Növelés
            </button>
        </>
    );
}

export default Pizzas;
