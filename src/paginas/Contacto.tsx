import FormularioContacto from "../componentes/organismos/FormularioContacto";

function Contacto(){
    return(

        //Contenedor principal con margen superior
        <div className="container mt-5">
            <div className="mb-4">
             <h1>Habla con nosotros</h1>
             <br/>
             <p>Ante cualquier duda, reclamo, sugerencia o cualquier otro motivo de interés, no dudes en contactarse con nosotros a través de este formulario, ingrese sus datos, mensaje y le atenderemos lo antes posible </p>
            </div>
            {/*Fila que centra el contenido*/}
            <div className="row justify-content-center">

                {/*Ancho adaptable segun pantalla*/}
                <div className="col-12 col-md-8 col-lg-6">
                    
                    {/*Tarjeta con sombra y espacio interior*/}
                    <div className="card shadow-sm p-4">

                        {/*Margen inferior del titulo*/}
                        <h2 className="mb-4">Formulario de contacto</h2>

                        <FormularioContacto/>



                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contacto