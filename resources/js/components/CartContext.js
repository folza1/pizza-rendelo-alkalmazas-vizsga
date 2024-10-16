import React, { createContext, useContext, useState, useEffect } from "react";

// Kosár Context létrehozása
const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Kezdő kosáradatok betöltése a localStorage-ből, ha vannak
    const getInitialCart = () => {
        const storedCart = localStorage.getItem("cartItems");
        return storedCart ? JSON.parse(storedCart) : [];
    };

    const [cartItems, setCartItems] = useState(getInitialCart);

    // Frissíteni a localStorage-et minden alkalommal, amikor a cartItems megváltozik
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (pizza, size, quantity) => {
        setCartItems((prevItems) => [
            ...prevItems,
            { ...pizza, size, quantity },
        ]);
    };

    // Kosár ürítése és a localStorage törlése
    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
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
