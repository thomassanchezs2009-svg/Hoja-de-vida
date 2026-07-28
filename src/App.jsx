import Header from "./components/header.jsx"
import Datosbasicos from "./components/perfil.jsx"
import Cursos from "./components/cursos.jsx"
import Piepag from "./components/footer.jsx"
import foto from "./assets/foto.jpeg"
import "./App.css"

function App() {

  return (
      <div className="contenedor">
        <Header />
        <Datosbasicos/>
        <Cursos/>
        <Piepag />
        <img src={foto} alt="Foto de perfil" width="250"></img>
      </div>
  )
}

export default App