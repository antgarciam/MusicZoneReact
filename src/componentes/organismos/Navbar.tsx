import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const usuarioGuardado = localStorage.getItem("usuarioMusicZone");
    const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    const navegar = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem("usuarioMusicZone");
        alert("Sesión cerrada correctamente");
        navegar("/login");
    };

    return (
        <nav className="navbar navbar-expand bg-dark">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    MusicZone 🎶🎸
                </Link>

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

                    {usuario?.rol === "cliente" && (
                        <Link className="nav-link text-white" to="/carrito">
                            Carrito
                        </Link>
                    )}

                    {usuario?.rol === "admin" && (
                        <Link className="nav-link text-white" to="/administrar-productos">
                            Administrar productos
                        </Link>
                    )}

                    {!usuario && (
                        <>
                            <Link className="nav-link text-white" to="/registrarse">
                                Registrarse
                            </Link>

                            <Link className="nav-link text-white" to="/login">
                                Iniciar sesión
                            </Link>
                        </>
                    )}

                    {usuario && (
                        <button
                            type="button"
                            className="btn btn-outline-light btn-sm ms-2"
                            onClick={cerrarSesion}
                        >
                            Cerrar sesión
                        </button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
