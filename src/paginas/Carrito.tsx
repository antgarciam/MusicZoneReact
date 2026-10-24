import { useState } from "react";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../datos/ProductosData";

interface ProductoCarrito {
  id: number;
  titulo: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

function Carrito() {
   
const [productos, setProductos] = useState<ProductoCarrito[]>(() => {
    const carritoGuardado = localStorage.getItem("carritoMusicZone");
    const carrito: ProductoCarrito[] = carritoGuardado ? JSON.parse(carritoGuardado) : [];
    const catalogo = obtenerProductos();

    const carritoActualizado = carrito.filter((producto) =>
        catalogo.some((productoCatalogo) => productoCatalogo.id === producto.id && productoCatalogo.activo)
    );

    localStorage.setItem("carritoMusicZone", JSON.stringify(carritoActualizado));

    return carritoActualizado;
});

  const guardarCarrito = (nuevoCarrito: ProductoCarrito[]) => {
    setProductos(nuevoCarrito);

    localStorage.setItem(
      "carritoMusicZone",
      JSON.stringify(nuevoCarrito)
    );
  };

  const cambiarCantidad = (id: number, cantidad: number) => {
    if (cantidad < 1) return;

    const nuevoCarrito = productos.map((producto) =>
      producto.id === id
        ? { ...producto, cantidad }
        : producto
    );

    guardarCarrito(nuevoCarrito);
  };

  const eliminarProducto = (id: number) => {
    const nuevoCarrito = productos.filter(
      (producto) => producto.id !== id
    );

    guardarCarrito(nuevoCarrito);
  };

  const vaciarCarrito = () => {
    guardarCarrito([]);
  };

  const total = productos.reduce(
    (acumulado, producto) =>
      acumulado + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="container mt-5 mb-5">
      <h1 className="mb-4">Mi carrito</h1>

      {productos.length === 0 ? (
        <div className="alert alert-info">
          <p className="mb-3">Tu carrito está vacío.</p>

          <Link to="/productos" className="btn btn-primary">
            Ir al catálogo
          </Link>
        </div>
      ) : (
        <>
          {productos.map((producto) => (
            <div className="card mb-3" key={producto.id}>
              <div className="card-body">
                <div className="row align-items-center g-3">
                  <div className="col-12 col-md-2 text-center">
                    <img
                      src={producto.imagen}
                      alt={producto.titulo}
                      className="img-fluid"
                      style={{
                        maxHeight: "120px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  <div className="col-12 col-md-4">
                    <h5 className="mb-2">{producto.titulo}</h5>

                    <p className="mb-0">
                      Precio unitario: $
                      {producto.precio.toLocaleString("es-CL")}
                    </p>
                  </div>

                <div className="col-6 col-md-3">
                    <label className="form-label fw-bold">
                        Cantidad
                    </label>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)}
                            disabled={producto.cantidad === 1}
                            aria-label="Disminuir cantidad"
                        >
                            −
                        </button>
                        <span
                            className="fw-bold text-center"
                            style={{ width: "30px" }}
                        >
                            {producto.cantidad}
                        </span>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => cambiarCantidad(producto.id, producto.cantidad + 1)}
                            aria-label="Aumentar cantidad"
                        >
                            +
                        </button>
                    </div>
                </div>

                    <div className="col-6 col-md-2">
                    <p className="mb-0 fw-bold">Subtotal:</p>

                    <span>
                      $
                      {(
                        producto.precio * producto.cantidad
                      ).toLocaleString("es-CL")}
                    </span>
                  </div>

                  <div className="col-12 col-md-1 text-md-end">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarProducto(producto.id)}
                      aria-label={`Eliminar ${producto.titulo}`}
                    >
                      Eliminar
                    </button>

                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="card mt-4">
            <div className="card-body text-end">
              <h3 className="mb-4">
                Total: ${total.toLocaleString("es-CL")}
              </h3>

              <button
                type="button"
                className="btn btn-danger me-2 mb-2"
                onClick={vaciarCarrito}
              >
                Vaciar carrito
              </button>

              <Link
                to="/productos"
                className="btn btn-primary mb-2"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
