import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./cart.css";
import axios from "axios";
import { zip } from "lodash";

function Cart() {
    const navigate = useNavigate();

    const { count, setCount } = useOutletContext();
    const { cartItems, clearCart, removeItem } = useCart();
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
    const [showLoadingModal, setShowLoadingModal] = useState(false); // State for loading modal

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        zip: "",
        city: "",
        address: "",
        email: "",
        terms: false,
        privacy: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/order", formData)
            .then((response) => {
                if (response.status === 200) {
                    // Close the form modal and show the success modal
                    setShowModal(false);
                    setShowSuccessModal(true);
                }
            })
            .catch((error) => {
                if (error.response && error.response.data.errors) {
                    // Validation errors
                    setErrors(error.response.data.errors);
                }
            });
    };

    let totalAmount = 0;

    const handleClearCart = () => {
        clearCart();
        setCount(0);
    };

    const handleRemoveItem = (index) => {
        removeItem(index);
        setCount((prevCount) => prevCount - cartItems[index].quantity);
    };

    const handleOrderClick = () => {
        setShowModal(true); // Show the modal on button click
    };

    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    const handleCloseSuccessModal = async () => {
        // Show loading modal while sending email
        setShowLoadingModal(true);

        try {
            const response = await axios.post("/api/send-email", {
                cartItems,
                formData,
            });
            if (response.status === 200) {
                console.log(response.data.message); // This will log the message from the backend
                // Close the success modal and clear the cart
                setShowSuccessModal(false);
                handleClearCart();
                navigate("/"); // Navigate to the / route
            }
        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            // Hide loading modal once the request is completed
            setShowLoadingModal(false);
        }
    };

    useEffect(() => {
        let isMounted = true; // Boolean változó a komponens állapotának követésére

        return () => {
            isMounted = false; // A komponens le bontásakor a boolean változót false-ra állítjuk
        };
    }, []); // A useEffect függvény itt

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-10 border">
                    <div className="text-center">
                        <h1>Kosár</h1>
                        {count > 0 && (
                            <>
                                <h3>Pizzák száma a kosárban: {count}</h3>
                                <button
                                    className="btn btn-danger mt-3 rounded-0 fs-4"
                                    onClick={handleClearCart}
                                >
                                    Kosár ürítése
                                </button>
                            </>
                        )}
                    </div>

                    <div className="mt-4 custom-container">
                        {cartItems.length === 0 ? (
                            <div
                                className="alert alert-primary rounded-0"
                                role="alert"
                            >
                                A kosár üres.
                            </div>
                        ) : (
                            <div>
                                <ul className="list-group">
                                    {cartItems.map((item, index) => {
                                        let basePrice = Number(item.price);
                                        let adjustedPrice = basePrice;

                                        if (item.size === "XL") {
                                            adjustedPrice *= 1.25;
                                        } else if (item.size === "XXL") {
                                            adjustedPrice *= 1.5;
                                        }

                                        totalAmount +=
                                            adjustedPrice * item.quantity;

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
                                                        Mennyiség:{" "}
                                                        {item.quantity} db
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="mb-1">
                                                        Ár:{" "}
                                                        {Math.round(
                                                            adjustedPrice
                                                        )}{" "}
                                                        Ft / db
                                                    </p>
                                                    <p className="mb-1">
                                                        Részösszeg:{" "}
                                                        {Math.round(
                                                            adjustedPrice *
                                                                item.quantity
                                                        )}{" "}
                                                        Ft
                                                    </p>
                                                </div>
                                                <button
                                                    className="btn btn-danger rounded-0"
                                                    onClick={() =>
                                                        handleRemoveItem(index)
                                                    }
                                                >
                                                    Töröl
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <h2 className="mt-4">
                                    Összesen: {Math.round(totalAmount)} Ft
                                </h2>

                                <div className="text-center mt-4">
                                    <button
                                        className="btn btn-success fs-4 rounded-0"
                                        onClick={handleOrderClick} // Show modal on click
                                    >
                                        Megrendelés
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="text-center mt-4">
                        {count > 0 && (
                            <>
                                <button
                                    className="btn btn-danger mt-3 rounded-0 fs-4"
                                    onClick={handleClearCart}
                                >
                                    Kosár ürítése
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Modal for the order form */}
            {showModal && (
                <div
                    className="modal show"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                    tabIndex="-1"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Megrendelési adatok
                                </h4>
                                <button
                                    type="button"
                                    className="btn-close rounded-0"
                                    onClick={handleCloseModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Vezetéknév
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            placeholder="Írd be a vezetékneved"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && (
                                            <p className="color-red">
                                                {errors.firstName[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Keresztnév
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            placeholder="Írd be a keresztneved"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && (
                                            <p className="color-red">
                                                {errors.lastName[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Telefonszám
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            className="form-control"
                                            placeholder="Írd be a telefonszámod"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && (
                                            <p className="color-red">
                                                {errors.phone[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Irányítószám
                                        </label>
                                        <input
                                            type="number"
                                            name="zip"
                                            className="form-control"
                                            placeholder="Írd be az irányítószámot"
                                            value={formData.zip}
                                            onChange={handleChange}
                                        />
                                        {errors.zip && (
                                            <p className="color-red">
                                                {errors.zip[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Település
                                        </label>
                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            placeholder="Település neve"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                        {errors.city && (
                                            <p className="color-red">
                                                {errors.city[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Szállítási cím
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control"
                                            placeholder="Utca és házszám"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                        {errors.address && (
                                            <p className="color-red">
                                                {errors.address[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email címed"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        {errors.email && (
                                            <p className="color-red">
                                                {errors.email[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="terms"
                                            id="termsCheckbox"
                                            value={formData.terms}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="termsCheckbox"
                                        >
                                            Elfogadom az ÁFSZ-t
                                        </label>
                                        {errors.terms && (
                                            <p className="color-red">
                                                {errors.terms[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="privacy"
                                            id="privacyCheckbox"
                                            value={formData.privacy}
                                            onChange={handleChange}
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="privacyCheckbox"
                                        >
                                            Elfogadom az Adatvédelmi
                                            szabályzatot
                                        </label>
                                        {errors.privacy && (
                                            <p className="color-red">
                                                {errors.privacy[0]}
                                            </p>
                                        )}
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary rounded-0"
                                            onClick={handleCloseModal}
                                        >
                                            Bezárás
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary rounded-0"
                                        >
                                            Megrendelés leadása
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal for success message */}
            {showSuccessModal && (
                <div
                    className="modal show"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                    tabIndex="-1"
                >
                    <div className="modal-dialog">
                        <div className="modal-content bg-success text-white rounded-0">
                            {" "}
                            {/* Itt van a rounded-0 osztály */}
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Sikeres megrendelés!
                                </h4>
                                <button
                                    type="button"
                                    className="btn-close rounded-0"
                                    onClick={handleCloseSuccessModal}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>A megrendelés sikeresen leadva!</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light rounded-0"
                                    onClick={handleCloseSuccessModal}
                                >
                                    Bezárás
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading Modal */}
            {showLoadingModal && (
                <div
                    className="modal show"
                    style={{
                        display: "block",
                        backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                    tabIndex="-1"
                >
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            {" "}
                            {/* Itt van a rounded-0 osztály */}
                            <div className="modal-body text-center">
                                <h5>Email küldése folyamatban...</h5>
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
