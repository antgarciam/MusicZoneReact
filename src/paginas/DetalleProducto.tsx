import { useParams } from 'react-router-dom'
import BotonVolver from '../componentes/atomos/BotonVolver'

const productos = [
    {
        id: 1,
        titulo: "Notebook",
        descripcion: "Notebook para jugar al getea seis.",
        precio: 599990,
        imagen: "/public/img/notebook.jpg"
    },
    {
        id: 2,
        titulo: "Mouse",
        descripcion: "Mouse inalámbrico con cable",
        precio: 19990,
        imagen: "/public/img/mouse.jpg"
    },
    {
        id: 3,
        titulo: "Teclado mecánico",
        descripcion: "Teclado para mecánicos",
        precio: 39990,
        imagen: "/public/img/teclado.jpg"
    },
    {
        id: 4,
        titulo: "Audífonos",
        descripcion: "Audifonos extravagantes",
        precio: 89990,
        imagen: "/public/img/audifonos.jpg"
    }
]

function DetalleProducto(){

    const { id } = useParams()

    const producto = productos.find(
        producto => producto.id === Number(id)
    )

    return (
        <div>
            <h1>Detalle del producto</h1>

            <img
            src={producto?.imagen}
            alt={producto?.titulo}
            style={{ width: '300px' }}
            />

            <h2>{producto?.titulo}</h2>

            <p>{producto?.descripcion}</p>

            <p>${producto?.precio}</p>

            <div className="mt-auto">
                <BotonVolver/>
            </div>

        </div>
    )
}

export default DetalleProducto