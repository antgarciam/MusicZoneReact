import { Link } from "react-router-dom";
function Navbar(){
    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <span className="navbar-brand text-white">
                    MusicZone 🎶🎸
                </span>

                <div className="navbar-nav">
                    <Link className="nav-link text-white" to="/">
                        Inicio
                    </Link>

                    <Link className="nav-link text-white" to="/productos">
                        Productos
                    </Link>

                    <Link className="nav-link text-white" to="/nosotros">
                        Nosotros
                    </Link>

                    <Link className="nav-link text-white" to="/contacto">
                        Contacto
                    </Link>

                    <Link className="nav-link text-white" to="/login">
                        Login
                    </Link>
                </div>

            </div>
            
        </nav>
    )
}

export default Navbar