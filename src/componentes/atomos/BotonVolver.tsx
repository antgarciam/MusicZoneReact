import { Link } from 'react-router-dom'


function BotonVolver(){
    
    return(
        <Link
        to={`/productos`}
        className="btn btn-secondary"
        >
            Volver al catálogo
        </Link>

    )
}

export default BotonVolver