
import { useState } from "react";
import { obtenerProductos, guardarProductos, type Producto } from "../datos/ProductosData";

function AdministrarProductos() {
    const [productos, setProductos] = useState<Producto[]>(() => obtenerProductos());
    const [editando, setEditando] = useState<number | null>(null);
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [imagen, setImagen] = useState("");
    const [categoria, setCategoria] = useState("Guitarras");

    const cancelarEdicion = () => {
        setEditando(null);
        setTitulo("");
        setDescripcion("");
        setPrecio("");
        setImagen("");
        setCategoria("Guitarras");
    };

    const guardarCambios = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!titulo.trim() || !descripcion.trim() || !imagen.trim() || Number(precio) <= 0) {
            alert("Completa todos los campos con valores válidos.");
            return;
        }

        const nuevosProductos = productos.map((producto) =>
            producto.id === editando
                ? {
                    ...producto,
                    titulo: titulo.trim(),
                    descripcion: descripcion.trim(),
                    precio: Number(precio),
                    imagen: imagen.trim(),
                    categoria
                }
                : producto
        );

        guardarProductos(nuevosProductos);
        setProductos(nuevosProductos);
        cancelarEdicion();
        alert("Producto actualizado correctamente.");
    };

    const editarProducto = (producto: Producto) => {
        setEditando(producto.id);
        setTitulo(producto.titulo);
        setDescripcion(producto.descripcion);
        setPrecio(String(producto.precio));
        setImagen(producto.imagen);
        setCategoria(producto.categoria);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const cambiarEstado = (id: number) => {
        const nuevosProductos = productos.map((producto) =>
            producto.id === id ? { ...producto, activo: !producto.activo } : producto
        );

        guardarProductos(nuevosProductos);
        setProductos(nuevosProductos);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Administrar productos</h1>

            {editando !== null && (
                <div className="card shadow-sm mb-5">
                    <div className="card-header bg-dark text-white">
                        Editar producto
                    </div>

                    <div className="card-body">
                        <form onSubmit={guardarCambios}>
                            <div className="mb-3">
                                <label className="form-label">Nombre del producto</label>
                                <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Descripción</label>
                                <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Precio</label>
                                <input type="number" className="form-control" min="1" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Ruta de la imagen</label>
                                <input type="text" className="form-control" value={imagen} onChange={(e) => setImagen(e.target.value)} required />
                                <small className="text-muted">Utiliza una imagen existente en /imgProductos/.</small>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Categoría</label>
                                <select className="form-select" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                    <option value="Guitarras">Guitarras</option>
                                    <option value="Pianos">Pianos</option>
                                    <option value="Baterías">Baterías</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-success me-2">Guardar cambios</button>
                            <button type="button" className="btn btn-secondary" onClick={cancelarEdicion}>Cancelar</button>
                        </form>
                    </div>
                </div>
            )}

            <h2 className="mb-3">Catálogo de productos</h2>

            <div className="table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Producto</th>
                            <th>Categoría</th>
                            <th>Precio</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.titulo}</td>
                                <td>{producto.categoria}</td>
                                <td>${producto.precio.toLocaleString("es-CL")}</td>
                                <td>
                                    <span className={`badge ${producto.activo ? "bg-success" : "bg-secondary"}`}>
                                        {producto.activo ? "Activo" : "Desactivado"}
                                    </span>
                                </td>
                                <td>
                                    <div className="d-flex flex-wrap gap-2">
                                        <button type="button" className="btn btn-primary btn-sm" onClick={() => editarProducto(producto)}>Editar</button>
                                        <button type="button" className={`btn btn-sm ${producto.activo ? "btn-warning" : "btn-success"}`} onClick={() => cambiarEstado(producto.id)}>
                                            {producto.activo ? "Desactivar" : "Activar"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdministrarProductos;
