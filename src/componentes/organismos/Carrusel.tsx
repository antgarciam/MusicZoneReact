
import { useState } from "react";

function Carrusel() {
    const [actual, setActual] = useState(0);
    const imagenes = [
        "imgCarrusel/guitarra.jpg",
        "imgCarrusel/bateria.jpg",
        "imgCarrusel/piano.jpg"
    ];

    return (
        <div id="carruselMusicZone" className="carousel slide container my-4">
            <div className="carousel-inner rounded shadow">
                {imagenes.map((imagen, index) => (
                    <div className={`carousel-item ${index === actual ? "active" : ""}`} key={imagen}>
                        <img src={imagen} className="d-block w-100"
                            style={{ height: "400px", objectFit: "cover" }} alt="Instrumento musical" />
                    </div>
                ))}
            </div>

            <button className="carousel-control-prev" onClick={() => setActual((actual + 2) % 3)}>
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" onClick={() => setActual((actual + 1) % 3)}>
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    );
}

export default Carrusel;
