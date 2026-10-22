
import { useState } from "react";
import CampoFormulario from "../moleculas/CampoFormulario";

function FormularioRegistro() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [psswd, setPsswd] = useState("");
    const [confirmarPsswd, setConfirmarPsswd] = useState("");

    const manejarRegistro = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nombre.trim() === "") {
            alert("Debe ingresar su nombre");
            return;
        }

        if (apellido.trim() === "") {
            alert("Debe ingresar su apellido");
            return;
        }

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
            alert("La contraseña debe tener al menos 8 caracteres");
            return;
        }

        if (confirmarPsswd.trim() === "") {
            alert("Debe confirmar su contraseña");
            return;
        }

        if (psswd !== confirmarPsswd) {
            alert("Las contraseñas no coinciden");
            return;
        }

        alert("Se ha registrado correctamente");
    };

    return (
        <form onSubmit={manejarRegistro} noValidate>

            <CampoFormulario
                etiqueta="Nombre"
                tipo="text"
                nombre="nombre"
                valor={nombre}
                alCambiar={setNombre}
            />

            <CampoFormulario
                etiqueta="Apellido"
                tipo="text"
                nombre="apellido"
                valor={apellido}
                alCambiar={setApellido}
            />

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

            <CampoFormulario
                etiqueta="Confirmar contraseña"
                tipo="password"
                nombre="confirmarContraseña"
                valor={confirmarPsswd}
                alCambiar={setConfirmarPsswd}
            />

            <button type="submit" className="btn btn-primary">
                Registrarse
            </button>

        </form>
    );
}

export default FormularioRegistro;
