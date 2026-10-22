import { useState } from "react";
import CampoFormulario from "../moleculas/CampoFormulario";

function FormularioLogin(){

    const[correo, setCorreo] = useState("");
    const[psswd, setPsswd] = useState("");


    const manejarLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault(); 


        if(correo.trim() === "") {
            alert("Debe ingresar su correo");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            alert("Ingrese un correo valido");
            return;
        }
        if(psswd.trim() === "") {
            alert("Campo contreseña no puede estar vacío");
            return;
        }
        if(psswd.length < 8) {
            alert("Mínimo de caracteres: 8")

            return;
        }
        alert("Bienvenido/a");
    };

    return (
        <form onSubmit={manejarLogin} noValidate>


            <CampoFormulario
            etiqueta= "Correo electrónico"
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
                Iniciar Sesion
            </button>
        </form>
    );
}

export default FormularioLogin