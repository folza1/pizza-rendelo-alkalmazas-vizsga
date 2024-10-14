// CartContext.js
import React, { createContext, useContext, useState } from "react";

// Kosár Context létrehozása
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (pizza, size, quantity) => {
        setCartItems((prevItems) => [
            ...prevItems,
            { ...pizza, size, quantity },
        ]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
