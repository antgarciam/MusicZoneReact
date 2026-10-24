export interface Producto {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
    activo: boolean;
}

export const productosIniciales: Producto[] = [
    { id: 1, titulo: "Guitarra Martin", descripcion: "Guitarra acústica de alta calidad.", precio: 120000, imagen: "/imgProductos/guitarraMartin.jpg", categoria: "Guitarras", activo: true },
    { id: 2, titulo: "Fender Stratocaster", descripcion: "Guitarra eléctrica ideal para rock y blues.", precio: 450000, imagen: "/imgProductos/FenderStratocaster.jpg", categoria: "Guitarras", activo: true },
    { id: 3, titulo: "Gibson Les Paul", descripcion: "Guitarra eléctrica con sonido potente.", precio: 890000, imagen: "/imgProductos/GibsonLesPaul.jpg", categoria: "Guitarras", activo: true },
    { id: 4, titulo: "Yamaha F310", descripcion: "Guitarra acústica ideal para principiantes.", precio: 159990, imagen: "/imgProductos/YamahaF310.jpg", categoria: "Guitarras", activo: true },
    { id: 5, titulo: "Piano de Cola", descripcion: "Piano de cola para interpretaciones elegantes.", precio: 2500000, imagen: "/imgProductos/PianodeCola.jpg", categoria: "Pianos", activo: true },
    { id: 6, titulo: "Yamaha P-45", descripcion: "Piano digital compacto de 88 teclas.", precio: 499990, imagen: "/imgProductos/YamahaP-45.jpg", categoria: "Pianos", activo: true },
    { id: 7, titulo: "Roland FP-10", descripcion: "Piano digital con teclas contrapesadas.", precio: 579990, imagen: "/imgProductos/RolandFP-10.jpg", categoria: "Pianos", activo: true },
    { id: 8, titulo: "Teclado Yamaha PSR-E373", descripcion: "Teclado musical con distintos sonidos.", precio: 249990, imagen: "/imgProductos/TecladoYamahaPSR-E373.jpg", categoria: "Pianos", activo: true },
    { id: 9, titulo: "Pearl Roadshow", descripcion: "Batería acústica ideal para principiantes.", precio: 499990, imagen: "/imgProductos/PearlRoadshow.jpg", categoria: "Baterías", activo: true },
    { id: 10, titulo: "Yamaha Rydeen", descripcion: "Batería acústica para ensayos y presentaciones.", precio: 699990, imagen: "/imgProductos/YamahaRydeen.jpg", categoria: "Baterías", activo: true },
    { id: 11, titulo: "Alesis Nitro", descripcion: "Batería electrónica compacta para practicar.", precio: 449990, imagen: "/imgProductos/AlesisNitro.jpg", categoria: "Baterías", activo: true },
    { id: 12, titulo: "Roland TD-02", descripcion: "Batería electrónica para practicar en casa.", precio: 599990, imagen: "/imgProductos/RolandTD-02.jpg", categoria: "Baterías", activo: true }
];


export function obtenerProductos(): Producto[] {
    const productosGuardados = localStorage.getItem("productosMusicZone");

    if (!productosGuardados) {
        localStorage.setItem("productosMusicZone", JSON.stringify(productosIniciales));
        return productosIniciales;
    }

    try {
        const productos: Producto[] = JSON.parse(productosGuardados);

        if (!Array.isArray(productos)) {
            throw new Error("Formato de productos inválido");
        }

        const productosActualizados = productosIniciales.map((productoInicial) => {
            const productoGuardado = productos.find(
                (producto) => producto.id === productoInicial.id
            );

            return productoGuardado
                ? { ...productoInicial, ...productoGuardado }
                : productoInicial;
        });

        localStorage.setItem("productosMusicZone", JSON.stringify(productosActualizados));

        return productosActualizados;
    } catch {
        localStorage.setItem("productosMusicZone", JSON.stringify(productosIniciales));
        return productosIniciales;
    }
}


export function guardarProductos(productos: Producto[]) {
    localStorage.setItem("productosMusicZone", JSON.stringify(productos));
}
