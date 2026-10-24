
import { useParams} from "react-router-dom";
import { obtenerProductos } from "../datos/ProductosData";
import BotonVolver from "../componentes/atomos/BotonVolver";

function DetalleProducto() {
    const { id } = useParams();
    const productos = obtenerProductos();

    const producto = productos.find(
        (producto) => producto.id === Number(id)
    );

    if (!producto || !producto.activo) {
        return (
            <div className="container text-center my-5">
                <h2>Producto no encontrado</h2>
                <p>El producto no existe o no está disponible.</p>
                <BotonVolver />
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="card shadow mx-auto" style={{ maxWidth: "900px" }}>
                <div className="row g-0 align-items-center">
                    <div className="col-md-6 text-center p-4">
                        <img
                            src={producto.imagen}
                            alt={producto.titulo}
                            className="img-fluid"
                            style={{ maxHeight: "400px", objectFit: "contain" }}
                        />
                    </div>

                    <div className="col-md-6">
                        <div className="card-body p-4">
                            <span className="badge bg-dark mb-3">
                                {producto.categoria}
                            </span>

                            <h1 className="card-title">{producto.titulo}</h1>

                            <p className="card-text">{producto.descripcion}</p>

                            <h3 className="text-success mb-4">
                                ${producto.precio.toLocaleString("es-CL")}
                            </h3>

                            <BotonVolver />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetalleProducto;
