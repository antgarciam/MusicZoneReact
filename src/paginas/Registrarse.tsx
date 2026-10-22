import FormularioRegistro from "../componentes/organismos/FormularioRegistro";

function Registrarse(){
    return(
        //Contenedor principal con margen superior
        <div className="container mt-5">
            
            {/*Fila que centra el contenido*/}
            <div className="row justify-content-center">

                {/*Ancho adaptable segun pantalla*/}
                <div className="col-12 col-md-8 col-lg-6">
                    
                    {/*Tarjeta con sombra y espacio interior*/}
                    <div className="card shadow-sm p-4">

                        {/*Margen inferior del titulo*/}
                        <h2 className="mb-4">Registrar usuario</h2>

                        <FormularioRegistro />

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Registrarse