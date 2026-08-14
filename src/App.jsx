import { useState } from "react";
import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/formularioAcademico";
import FormularioExperiencia from "./components/formularioExperiencia";
import Vistaprevia from "./components/Vistaprevia";
import Footer from "./components/Footer";
import "./App.css";


function App() {

  const [paso, setPaso] = useState(1);


  // estado compartido
  const [Aprendiz, setAprendiz] = useState({

    // datos personales
    Foto: null,
    nombre: "",
    edad: "",
    ciudad: "",
    correo: "",
    programa: "",
    ficha: "",
    jornada: "mañana",

    // información académica
    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",
   

  });


  // estado para los cursos
  const [datos, setDatos] = useState({
     cursos: [],
    Experiencia: [],
  });


  return (
    <>
      <Header />


      {paso === 1 && (
        <FormularioDatos
          Aprendiz={Aprendiz}
          setAprendiz={setAprendiz}
          siguiente={() => setPaso(2)}
        />
      )}


      {paso === 2 && (
        <FormularioAcademico
          Aprendiz={Aprendiz}
          setAprendiz={setAprendiz}
          datos={datos}
          setDatos={setDatos}
          siguiente={() => setPaso(3)}
          anterior={() => setPaso(1)}
        />
      )}


      {paso === 3 && (
        <FormularioExperiencia
          Aprendiz={Aprendiz}
          setAprendiz={setAprendiz}
          datos={datos}
          setDatos={setDatos}
          siguiente={() => setPaso(4)}
          anterior={() => setPaso(2)}
        />
      )}


      {paso === 4 && (
        <Vistaprevia
          Aprendiz={Aprendiz}
          datos={datos}
          anterior={() => setPaso(3)}
        />
      )}


      <Footer />
    </>
  );
}


export default App;