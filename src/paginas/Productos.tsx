import { useState } from "react";
import CardProducto from "../componentes/moleculas/CardProducto";

function Productos() {

    const [categoria, setCategoria] = useState("Todos");

    const productos = [
        
        {
            id: 1,
            titulo: "Guitarra Martin",
            descripcion: "Guitarra acústica de alta calidad.",
            precio: 120000,
            imagen: "/imgProductos/guitarraMartin.jpg",
            categoria: "Guitarras"
        },
        {
            id: 2,
            titulo: "Fender Stratocaster",
            descripcion: "Guitarra eléctrica ideal para rock y blues.",
            precio: 450000,
            imagen: "/imgProductos/FenderStratocaster.jpg",
            categoria: "Guitarras"
        },
        {
            id: 3,
            titulo: "Gibson Les Paul",
            descripcion: "Guitarra eléctrica con sonido potente.",
            precio: 890000,
            imagen: "/imgProductos/GibsonLesPaul.jpg",
            categoria: "Guitarras"
        },
        {
            id: 4,
            titulo: "Yamaha F310",
            descripcion: "Guitarra acústica ideal para principiantes.",
            precio: 159990,
            imagen: "/imgProductos/YamahaF310.jpg",
            categoria: "Guitarras"
        },

  
        {
            id: 5,
            titulo: "Piano de Cola",
            descripcion: "Piano de cola para interpretaciones elegantes.",
            precio: 2500000,
            imagen: "/imgProductos/PianodeCola.jpg",
            categoria: "Pianos"
        },
        {
            id: 6,
            titulo: "Yamaha P-45",
            descripcion: "Piano digital compacto de 88 teclas.",
            precio: 499990,
            imagen: "/imgProductos/YamahaP-45.jpg",
            categoria: "Pianos" 
        },
        {
            id: 7,
            titulo: "Roland FP-10",
            descripcion: "Piano digital con teclas contrapesadas.",
            precio: 579990,
            imagen: "/imgProductos/RolandFP-10.jpg",
            categoria: "Pianos"
        },
        {
            id: 8,
            titulo: "Teclado Yamaha PSR-E373",
            descripcion: "Teclado musical con distintos sonidos.",
            precio: 249990,
            imagen: "/imgProductos/TecladoYamahaPSR-E373.jpg",
            categoria: "Pianos"
        },

   
        {
            id: 9,
            titulo: "Pearl Roadshow",
            descripcion: "Batería acústica ideal para principiantes.",
            precio: 499990,
            imagen: "/imgProductos/PearlRoadshow.jpg",
            categoria: "Baterías"
        },
        {
            id: 10,
            titulo: "Yamaha Rydeen",
            descripcion: "Batería acústica para ensayos y presentaciones.",
            precio: 699990,
            imagen: "/imgProductos/YamahaRydeen.jpg",
            categoria: "Baterías"
        },
        {
            id: 11,
            titulo: "Alesis Nitro",
            descripcion: "Batería electrónica compacta para practicar.",
            precio: 449990,
            imagen: "/imgProductos/AlesisNitro.jpg",
            categoria: "Baterías"
        },
        {
            id: 12,
            titulo: "Roland TD-02",
            descripcion: "Batería electrónica para practicar en casa.",
            precio: 599990,
            imagen: "/imgProductos/RolandTD-02.jpg",
            categoria: "Baterías"
        }
    ];

    const productosFiltrados = productos.filter((producto) => {
        return categoria === "Todos" || producto.categoria === categoria;
    });

    return (
        <div>
            <h1>Productos</h1>

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
