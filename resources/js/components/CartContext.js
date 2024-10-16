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

    // Kosár ürítése
    const clearCart = () => {
        setCartItems([]);
    };

    // Elem eltávolítása a kosárból
    const removeItem = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, clearCart, removeItem }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
