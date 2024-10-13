import React from "react";
import { Link } from "react-router-dom";
import margherita from "./img/margherita.jpeg";
import pepperoni from "./img/pepperoni.jpeg";
import vegetarian from "./img/vegetarian.jpeg";
import "./home.css";

function Home() {
    return (
        <div className="container">
            {/* Főcím */}
            <h1 className="text-center my-5">Üdvözlünk a Pizzériánkban!</h1>

            {/* Rövid leírás */}
            <p className="text-center fs-4 mb-4">
                Kóstold meg a város legfinomabb pizzáit friss alapanyagokból!
            </p>

            <div className="row">
                <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                    <img
                        src={margherita}
                        alt="Margherita Pizza"
                        className="img-fluid rounded img-fill" // Használja az img-fill osztályt
                    />
                    <h3 className="text-center">Margherita</h3>
                    <p className="text-center">
                        Friss paradicsommal és bazsalikommal.
                    </p>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                    <img
                        src={pepperoni}
                        alt="Pepperoni Pizza"
                        className="img-fluid rounded img-fill" // Használja az img-fill osztályt
                    />
                    <h3 className="text-center">Pepperoni</h3>
                    <p className="text-center">
                        Pikáns pepperonival és sajttal.
                    </p>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center mb-4">
                    <img
                        src={vegetarian}
                        alt="Veggie Pizza"
                        className="img-fluid rounded img-fill" // Használja az img-fill osztályt
                    />
                    <h3 className="text-center">Vegetáriánus</h3>
                    <p className="text-center">
                        Zöldségekkel és friss fűszernövényekkel.
                    </p>
                </div>
            </div>

            {/* Rendelési ajánlat */}
            <div className="text-center my-5">
                <h2>Rendelj most online!</h2>
                <Link to="/pizzas" className="custom-link">
                    <button className="btn btn-danger btn-lg mt-3">
                        Rendelés
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
