function Footer() {
    return (
        <footer class="bg-dark text-white pt-4">
            <div class="container py-4">
                <div class="row">
                    <div class="col-md-4">
                        <h5>Pizza Rendelő</h5>
                        <p>
                            1234 Budapest, Pizzéria utca 5.
                            <br />
                            Telefonszám: +36 1 234 5678
                        </p>
                    </div>

                    <div class="col-md-4">
                        <h5>Nyitvatartás</h5>
                        <ul class="list-unstyled">
                            <li>Hétfő - Péntek: 10:00 - 22:00</li>
                            <li>Szombat: 12:00 - 23:00</li>
                            <li>Vasárnap: Zárva</li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h5>Kövess minket</h5>
                        <div>
                            <a href="#" class="text-white me-3">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="#" class="text-white me-3">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="#" class="text-white me-3">
                                <i class="bi bi-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <hr class="my-4" />

                <div class="text-center py-3">
                    <p class="mb-0">
                        &copy; 2024 Pizza Rendelő. Minden jog fenntartva.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
