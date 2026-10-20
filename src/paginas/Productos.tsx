import CardProducto from "../componentes/moleculas/CardProducto";

function Productos(){
    return(
        <div>
            <h1> Productos</h1>
            <div className="row g-4">

                <CardProducto
                id= {1}
                titulo="Notebook"
                descripcion="Notebook ideal para estudiar y trabajar."
                precio={599990}
                imagen="public/img/notebook.jpg"
                />

                <CardProducto
                id= {2}
                titulo="Mouse"
                descripcion="Mouse inalámbrico"
                precio={19990}
                imagen="public/img/mouse.jpg"
                />

                <CardProducto
                id= {3}
                titulo="Teclado"
                descripcion="Teclado mecánico"
                precio={39990}
                imagen="public/img/teclado.jpg"
                />

                <CardProducto
                id= {4}
                titulo="Audifonos"
                descripcion="Audifonos extravagantes"
                precio={89990}
                imagen="public/img/audifonos.jpg"
                />
            </div>
        </div>
    )
}

export default Productos