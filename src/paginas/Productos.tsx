
import { useState } from "react";
import CardProducto from "../componentes/moleculas/CardProducto";
import { obtenerProductos } from "../datos/ProductosData";

function Productos() {
    const [categoria, setCategoria] = useState("Todos");
    const [productos] = useState(() => obtenerProductos());

    const productosActivos = productos.filter((producto) => producto.activo);

    const productosFiltrados = productosActivos.filter((producto) => {
        return categoria === "Todos" || producto.categoria === categoria;
    });

    return (
        <div>
            <h1 className="text-center mt-4">Productos</h1>

            <div className="container my-4">
                <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                    <button
                        className={`btn ${categoria === "Todos" ? "btn-warning" : "btn-dark"}`}
                        onClick={() => setCategoria("Todos")}
                    >
                        Todos
                    </button>

                    <button
                        className={`btn ${categoria === "Guitarras" ? "btn-warning" : "btn-dark"}`}
                        onClick={() => setCategoria("Guitarras")}
                    >
                        Guitarras
                    </button>

                    <button
                        className={`btn ${categoria === "Pianos" ? "btn-warning" : "btn-dark"}`}
                        onClick={() => setCategoria("Pianos")}
                    >
                        Pianos
                    </button>

                    <button
                        className={`btn ${categoria === "Baterías" ? "btn-warning" : "btn-dark"}`}
                        onClick={() => setCategoria("Baterías")}
                    >
                        Baterías
                    </button>
                </div>

                <div className="d-flex justify-content-center gap-4 flex-wrap">
                    {productosFiltrados.map((producto) => (
                        <CardProducto
                            key={producto.id}
                            id={producto.id}
                            titulo={producto.titulo}
                            descripcion={producto.descripcion}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    ))}
                </div>

                {productosFiltrados.length === 0 && (
                    <p className="text-center mt-4">
                        No hay productos disponibles en esta categoría.
                    </p>
                )}
            </div>
        </div>
    );
}

export default Productos;
