import React from "react";
import { useOutletContext } from "react-router-dom";

function Pizzas() {
    // useOutletContext használata a Layout-ból jövő state és setter eléréséhez
    const { count, setCount } = useOutletContext();

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
