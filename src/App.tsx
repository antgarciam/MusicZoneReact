import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './componentes/organismos/Navbar'
import Inicio from './paginas/Inicio'
import Productos from './paginas/Productos'
import Nosotros from './paginas/Nosotros'
import Contacto from './paginas/Contacto'
import DetalleProducto from './paginas/DetalleProducto'
import Login from './paginas/Login'
import Footer from './componentes/organismos/Footer'
import Registrarse from './paginas/Registrarse'

function App() {

  return(
    <>

      <Navbar/>

      <Routes>
        <Route
          path="/"
          element = {<Inicio/>}
        />

        <Route
          path="/productos"
          element = {<Productos/>}
        />

        <Route
          path="/nosotros"
          element = {<Nosotros/>}
        />
        
        <Route path="/producto/:id"
        element={<DetalleProducto/>}
        />

        <Route
          path="/contacto"
          element = {<Contacto/>}
        />

        <Route
          path="/registrarse"
          element = {<Registrarse/>}
        />

        <Route
          path="/login"
          element = {<Login/>}
        />


      </Routes>

      <Footer />
    </>
  )

}
export default App
