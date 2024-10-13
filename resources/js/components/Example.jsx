import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Pizzas from "./Pizzas";
import Contact from "./Contact";
import Cart from "./Cart";
import NoPage from "./NoPage";

function Example() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="pizzas" element={<Pizzas />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
