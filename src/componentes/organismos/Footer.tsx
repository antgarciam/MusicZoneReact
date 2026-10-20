import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <h5>MusicZone 🎶🎸</h5>
            <p>Tu tienda de instrumentos musicales</p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link className="text-white" to="/nosotros">Nosotros</Link>
                <Link className="text-white" to="/contacto">Contacto</Link>
            </div>

            <hr className="mx-auto w-75" />

            <small>© 2026 MusicZone. Todos los derechos reservados.</small>
        </footer>
    );
}

export default Footer;

