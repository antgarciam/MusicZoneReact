import CardProducto from "../componentes/moleculas/CardProducto"
import Carrusel from "../componentes/organismos/Carrusel"

function Inicio(){
    return(
        <div className="container mt-4">
            <h1>Inicio</h1>

            <p>
                Bienvenido a nuestra tienda    
            </p>    
            <Carrusel />

            <p>
                En MusicZone, nos apasiona la música y nos dedicamos a ofrecerte una amplia gama de instrumentos musicales de alta calidad.
                Ya sea que seas un principiante entusiasta o un músico experimentado, tenemos todo lo que necesitas para llevar tu pasión musical al siguiente nivel.
            </p>

            <h1>Algunos de nuestros productos destacados</h1>
            
            <div className="container my-4">
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                    <CardProducto
                    id= {1}
                    titulo="Guitarra Martin"
                    descripcion="Guitarra acústica de alta calidad."
                    precio={120000}
                    imagen="public/imgProductos/guitarraMartin.jpg"
                    />

                    <CardProducto
                    id= {5}
                    titulo= "Piano de Cola"
                    descripcion= "Piano de cola para interpretaciones elegantes."
                    precio= {2500000}
                    imagen= "/imgProductos/PianodeCola.jpg"
                    
                    />

                    <CardProducto
                    id= {9}
                    titulo= "Pearl Roadshow"
                    descripcion= "Batería acústica ideal para principiantes."
                    precio= {499990}
                    imagen= "/imgProductos/PearlRoadshow.jpg"

                    />
                </div>
            </div>
        </div>

        

        
    )
}

export default Inicio