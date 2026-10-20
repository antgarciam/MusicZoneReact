import { useParams } from 'react-router-dom'
import BotonVolver from '../componentes/atomos/BotonVolver'

const productos = [
    {
        id: 1,
        titulo: "Guitarra Martin",
        descripcion: "Guitarra acústica de alta calidad, con un sonido cálido y equilibrado. Ideal para interpretar distintos estilos musicales con comodidad.",
        precio: 120000,
        imagen: "/imgProductos/guitarraMartin.jpg",
        categoria: "Guitarras"
    },
    {
        id: 2,
        titulo: "Fender Stratocaster",
        descripcion: "Guitarra eléctrica reconocida por su sonido versátil y brillante. Perfecta para tocar rock, blues, pop y otros géneros musicales.",
        precio: 450000,
        imagen: "/imgProductos/FenderStratocaster.jpg",
        categoria: "Guitarras"
    },
    {
        id: 3,
        titulo: "Gibson Les Paul",
        descripcion: "Guitarra eléctrica con un sonido potente y profundo, ideal para riffs y solos. Una excelente opción para los amantes del rock.",
        precio: 890000,
        imagen: "/imgProductos/GibsonLesPaul.jpg",
        categoria: "Guitarras"
    },
    {
        id: 4,
        titulo: "Yamaha F310",
        descripcion: "Guitarra acústica cómoda y fácil de tocar, ideal para quienes están comenzando. Ofrece un sonido equilibrado para practicar y acompañar canciones.",
        precio: 159990,
        imagen: "/imgProductos/YamahaF310.jpg",
        categoria: "Guitarras"
    },
    {
        id: 5,
        titulo: "Piano de Cola",
        descripcion: "Piano de cola con un sonido amplio y expresivo, ideal para interpretaciones musicales. Su diseño elegante destaca en cualquier espacio.",
        precio: 2500000,
        imagen: "/imgProductos/PianodeCola.jpg",
        categoria: "Pianos"
    },
    {
        id: 6,
        titulo: "Yamaha P-45",
        descripcion: "Piano digital de 88 teclas que ofrece una experiencia similar a la de un piano tradicional. Ideal para estudiar y practicar en casa.",
        precio: 499990,
        imagen: "/imgProductos/YamahaP-45.jpg",
        categoria: "Pianos"
    },
    {
        id: 7,
        titulo: "Roland FP-10",
        descripcion: "Piano digital con teclas contrapesadas para una interpretación más natural. Su formato compacto facilita su uso en el hogar.",
        precio: 579990,
        imagen: "/imgProductos/RolandFP-10.jpg",
        categoria: "Pianos"
    },
    {
        id: 8,
        titulo: "Teclado Yamaha PSR-E373",
        descripcion: "Teclado musical con una variedad de sonidos y ritmos para experimentar. Es una alternativa versátil para aprender y crear música.",
        precio: 249990,
        imagen: "/imgProductos/TecladoYamahaPSR-E373.jpg",
        categoria: "Pianos"
    },
    {
        id: 9,
        titulo: "Pearl Roadshow",
        descripcion: "Batería acústica pensada para músicos principiantes que buscan su primer instrumento. Ideal para practicar y desarrollar el ritmo.",
        precio: 499990,
        imagen: "/imgProductos/PearlRoadshow.jpg",
        categoria: "Baterías"
    },
    {
        id: 10,
        titulo: "Yamaha Rydeen",
        descripcion: "Batería acústica versátil, adecuada para ensayos y presentaciones musicales. Ofrece una opción completa para desarrollar tus habilidades.",
        precio: 699990,
        imagen: "/imgProductos/YamahaRydeen.jpg",
        categoria: "Baterías"
    },
    {
        id: 11,
        titulo: "Alesis Nitro",
        descripcion: "Batería electrónica compacta que permite practicar con distintos sonidos. Ideal para entrenar en casa y conectar con equipos compatibles.",
        precio: 449990,
        imagen: "/imgProductos/AlesisNitro.jpg",
        categoria: "Baterías"
    },
    {
        id: 12,
        titulo: "Roland TD-02",
        descripcion: "Batería electrónica diseñada para practicar y mejorar la técnica desde casa. Su formato compacto resulta práctico para espacios reducidos.",
        precio: 599990,
        imagen: "/imgProductos/RolandTD-02.jpg",
        categoria: "Baterías"
    }
]

function DetalleProducto(){

    const { id } = useParams()

    const producto = productos.find(
        producto => producto.id === Number(id)
    )

    return (
        <div>
            <h1 className="mb-4">Detalle del producto</h1>

            <img
                src={producto?.imagen}
                alt={producto?.titulo}
                className="mb-4"
                style={{ width: '300px' }}
            />

            <h2 className="mb-4">{producto?.titulo}</h2>

            <p className="mb-4">{producto?.descripcion}</p>

            <h2 className="mb-4">${producto?.precio}</h2>

            <div className="mt-auto mb-4">
                <BotonVolver/>
            </div>

        </div>
    )
}

export default DetalleProducto