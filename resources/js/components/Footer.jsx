function Footer() {
    return (
        <footer className="bg-dark text-white pt-4">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Pizza Rendelő</h5>
                        <p>
                            1234 Budapest, Pizzéria utca 5.
                            <br />
                            Telefonszám: +36 1 234 5678
                        </p>
                        <p>info@pizzarendelo.hu</p>
                    </div>

                    <div className="col-md-4">
                        <h5>Nyitvatartás</h5>
                        <ul className="list-unstyled">
                            <li>Hétfő - Péntek: 10:00 - 22:00</li>
                            <li>Szombat: 12:00 - 23:00</li>
                            <li>Vasárnap: Zárva</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5>Kövess minket</h5>
                        <div>
                            <a
                                href="http://facebook.com"
                                className="text-white me-3"
                            >
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a
                                href="http://instagram.com"
                                className="text-white me-3"
                            >
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a
                                href="http://twitter.com"
                                className="text-white me-3"
                            >
                                <i className="bi bi-twitter"></i>
                            </a>
                        </div>
                        <p>
                            Ha bármilyen kérdése van, ne habozzon kapcsolatba
                            lépni velünk!
                        </p>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="text-center py-3">
                    <p className="mb-0">
                        &copy; 2024 Pizza Rendelő. Minden jog fenntartva.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
