import React, { useState } from "react";
import "./contact.css"; // Ensure to create this CSS file
import axios from "axios"; // Import axios

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState(""); // State for error messages

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError(""); // Clear error message on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post("/api/contact", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Handle successful response
            if (response.status === 200) {
                alert("Üzenet sikeresen elküldve!");
                setFormData({ name: "", email: "", message: "" }); // Reset form
                setError(""); // Clear any previous error messages
            }
        } catch (error) {
            if (error.response && error.response.data.errors) {
                // Add validation errors to the error array
                const errorMessages = Object.values(
                    error.response.data.errors
                ).flat();
                setError(errorMessages);
            } else {
                setError(["An unexpected error occurred."]); // General error message
            }
        }
    };

    return (
        <>
            <div className="container mt-2">
                {" "}
                {/* Add container for Bootstrap styling */}
                <div className="row justify-content-center">
                    <div className="col-8 contact-container rounded-0 border">
                        <div className="contact-info">
                            <h2 className="text-center orange-text font-weight-bolder">
                                Pizza Rendelő
                            </h2>
                            <h3 className="text-center">
                                <span className="font-weight-bolder">Cím:</span>{" "}
                                1234{" "}
                                <span className="font-weight-bolder">
                                    Budapest
                                </span>
                                , Pizzéria utca 5.
                            </h3>
                            <h3 className="text-center orange-text font-weight-bolder">
                                Telefonszám:
                            </h3>
                            <h4 className="text-center font-weight-bolder">
                                +36 1 234 5678
                            </h4>

                            <h3 className="text-center orange-text font-weight-bolder">
                                Email:
                            </h3>
                            <h4 className="text-center font-weight-bolder">
                                info@pizzarendelo.hu
                            </h4>
                            <h2 className="orange-text font-weight-bolder mt-5 text-center">
                                Nyitvatartás
                            </h2>
                            <h4 className="text-center">
                                <span className="font-weight-bolder">
                                    Hétfő - Péntek:
                                </span>{" "}
                                10:00 - 22:00
                            </h4>
                            <h4 className="text-center">
                                <span className="font-weight-bolder">
                                    Szombat:
                                </span>{" "}
                                12:00 - 23:00
                            </h4>
                            <h4 className="text-center">
                                <span className="font-weight-bolder">
                                    Vasárnap:
                                </span>{" "}
                                Zárva
                            </h4>
                        </div>
                        <form
                            className="contact-form mt-5"
                            onSubmit={handleSubmit}
                        >
                            <h2 className="text-center">Üzenetküldés</h2>
                            {error && (
                                <div className="alert alert-danger rounded-0">
                                    {error[0]}
                                </div>
                            )}{" "}
                            {/* Display error message */}
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Név"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email cím"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    placeholder="Üzenet"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn orange-color w-100 rounded-0 border fs-3"
                            >
                                Küldés
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
