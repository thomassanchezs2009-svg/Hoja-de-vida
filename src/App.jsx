import { useState } from "react";
import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";
import Vistaprevia from "./components/Vistaprevia";
import Footer from "./components/Footer";
import "./App.css";


function App() {

  const [paso, setPaso] = useState(1);


  // estado compartido
  const [Persona, setPersona] = useState({

    // datos personales
    Foto: null,
    Nombre: "",
    Edad: "",
    Ciudad: "",
    Correo: "",
    Programa: "",
    Ficha: "",
    Jornada: "mañana",

    // información académica
    nivel: "",
    institucion: "",
    titulo: "",
    anio: "",

    // experiencia
    empresa: "",
    cargo: "",
    funciones: "",
    habilidades: ""

  });


  // estado para los cursos
  const [datos, setDatos] = useState({
    cursos: [],
    Experiencia:[], 
  });


  return (
    <>
      <Header />


      {paso === 1 && (
        <FormularioDatos
          Persona={Persona}
          setPersona={setPersona}
          siguiente={() => setPaso(2)}
        />
      )}


      {paso === 2 && (
        <FormularioAcademico
          Persona={Persona}
          setPersona={setPersona}
          datos={datos}
          setDatos={setDatos}
          siguiente={() => setPaso(3)}
          anterior={() => setPaso(1)}
        />
      )}


      {paso === 3 && (
        <FormularioExperiencia
          Persona={Persona}
          setPersona={setPersona}
          datos={datos}
          setDatos={setDatos}
          siguiente={() => setPaso(4)}
          anterior={() => setPaso(2)}
       />
     )}
      


      {paso === 4 && (
       <Vistaprevia
        Persona={Persona}
        datos={datos}
        anterior={() => setPaso(3)}
       />
       )}





      <Footer />
    </>
  );
}


export default App;