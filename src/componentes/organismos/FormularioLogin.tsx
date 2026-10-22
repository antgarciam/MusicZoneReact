
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CampoFormulario from "../moleculas/CampoFormulario";

function FormularioLogin() {
    const [correo, setCorreo] = useState("");
    const [psswd, setPsswd] = useState("");
    const navegar = useNavigate();

    const manejarLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (correo.trim() === "") {
            alert("Debe ingresar su correo");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo válido");
            return;
        }

        if (psswd.trim() === "") {
            alert("El campo contraseña no puede estar vacío");
            return;
        }

        if (psswd.length < 8) {
            alert("Mínimo de caracteres: 8");
            return;
        }

        if (
            correo.trim().toLowerCase() === "admin@musiczone.cl" &&
            psswd === "admin123"
        ) {
            localStorage.setItem(
                "usuarioMusicZone",
                JSON.stringify({
                    correo: correo.trim().toLowerCase(),
                    rol: "admin"
                })
            );

            alert("Bienvenido/a, administrador");
            navegar("/administrar-productos");
            return;
        }

        if (
            correo.trim().toLowerCase() === "cliente@musiczone.cl" &&
            psswd === "cliente123"
        ) {
            localStorage.setItem(
                "usuarioMusicZone",
                JSON.stringify({
                    correo: correo.trim().toLowerCase(),
                    rol: "cliente"
                })
            );

            alert("Bienvenido/a, cliente");
            navegar("/productos");
            return;
        }

        alert("Correo o contraseña incorrectos");
    };

    return (
        <form onSubmit={manejarLogin} noValidate>
            <CampoFormulario
                etiqueta="Correo electrónico"
                tipo="email"
                nombre="correo"
                valor={correo}
                alCambiar={setCorreo}
            />

            <CampoFormulario
                etiqueta="Contraseña"
                tipo="password"
                nombre="contraseña"
                valor={psswd}
                alCambiar={setPsswd}
            />

            <button type="submit" className="btn btn-primary">
                Iniciar Sesión
            </button>
        </form>
    );
}

export default FormularioLogin;
