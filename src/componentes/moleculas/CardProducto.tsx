
import Boton from "../atomos/Boton";

interface CardProps {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

interface ProductoCarrito {
    id: number;
    titulo: string;
    precio: number;
    imagen: string;
    cantidad: number;
}

function CardProducto({ id, titulo, descripcion, precio, imagen }: CardProps) {
    const agregarAlCarrito = () => {
        const carritoGuardado = localStorage.getItem("carritoMusicZone");
        const carrito: ProductoCarrito[] = carritoGuardado ? JSON.parse(carritoGuardado) : [];
        const productoExistente = carrito.find((producto) => producto.id === id);

        let nuevoCarrito: ProductoCarrito[];

        if (productoExistente) {
            nuevoCarrito = carrito.map((producto) =>
                producto.id === id ? { ...producto, cantidad: producto.cantidad + 1 } : producto
            );
        } else {
            nuevoCarrito = [...carrito, { id, titulo, precio, imagen, cantidad: 1 }];
        }

        localStorage.setItem("carritoMusicZone", JSON.stringify(nuevoCarrito));
        alert(`${titulo} se agregó al carrito.`);
    };

    return (
        <div className="card" style={{ width: "21rem" }}>
            <img src={imagen} className="card-img-top" alt={titulo} style={{ height: "200px", objectFit: "contain" }} />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{titulo}</h5>

                <p className="card-text">{descripcion}</p>

                <p className="card-text">${precio.toLocaleString("es-CL")}</p>

                <div className="mt-auto d-flex flex-column gap-2">
                    <Boton id={id} />
                    <button type="button" className="btn btn-success" onClick={agregarAlCarrito}>
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;
