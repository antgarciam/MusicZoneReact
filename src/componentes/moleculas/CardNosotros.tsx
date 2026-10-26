
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CardNosotros() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${open1 ? "" : "collapsed"}`}
            onClick={() => setOpen1(!open1)}
          >
            Anthuan Garcia
          </button>
        </h2>

        {open1 && (
          <div className="accordion-body">
            <img
              src="public\imgNosotros\Anthuan.jpg"
              alt="Anthuan Garcia"
              width="200"
            />
            <p>Encargado de hacer la estructura principal de la pagina </p>
            <Link to="/nosotros">Ver más</Link>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${open2 ? "" : "collapsed"}`}
            onClick={() => setOpen2(!open2)}
          >
            Damian Mondaga
          </button>
        </h2>

        {open2 && (
          <div className="accordion-body">
            <img
              src="public\imgNosotros\Damian.jpg"
              alt="Damian Mondaga"
              width="200"
            />
            <p>Encargado de Control de erorres y pruebas unitarias para  corregirlas</p>
            <Link to="/nosotros">Ver más</Link>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${open3 ? "" : "collapsed"}`}
            onClick={() => setOpen3(!open3)}
          >
            Benjamin Duarte
          </button>
        </h2>

        {open3 && (
          <div className="accordion-body">
            <img
              src="public\imgNosotros\Benja.jpg"
              alt="Benjamin Duarte"
              width="200"
            />
            <p>Encargado en importar todo tipo objetos, productos, etc a la pagina, para que la pagina muestre el catalogo de manera correcta</p>
            <Link to="/nosotros">Ver más</Link>
          </div>
        )}
      </div>
    </div>
  );
}
