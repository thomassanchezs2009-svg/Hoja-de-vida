import { useState } from "react";
import Header from "./components/Header";
import FormularioDatos from "./components/FormularioDatos";
import FormularioAcademico from "./components/FormularioAcademico";
import FormularioExperiencia from "./components/FormularioExperiencia";
import Vistaprevia from "./components/vistaprevia";
import Footer from "./components/Footer";
import "./App.css";



function App() {
  // controla el formulario 

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

  //conectar react con flask 
 const guardarhojavida = async () => {
  try {
    console.log("🔥 SE PRESIONÓ CONFIRMAR REGISTRO");

    let fotoBase64 = null;

    if (Persona.Foto) {
      fotoBase64 = await new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(Persona.Foto);
      });
    }

    const datosPersona = {
      nombre: Persona.Nombre,
      edad: Persona.Edad,
      ciudad: Persona.Ciudad,
      correo: Persona.Correo,
      fotografia: fotoBase64,
      programa: Persona.Programa,
      ficha: Persona.Ficha,
      jornada: Persona.Jornada
    };

    console.log("📤 ENVIANDO:", datosPersona);

    const respuesta = await fetch(
      "http://127.0.0.1:5000/api/registrohv",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosPersona)
      }
    );

    console.log("📡 Estado Flask:", respuesta.status);

    const resultado = await respuesta.json();

    console.log("📥 RESPUESTA FLASK:", resultado);

    if (!respuesta.ok) {
      alert(
        "Error del servidor: " +
        JSON.stringify(resultado)
      );
      return;
    }

    if (resultado.mensaje === "El usuario ya existe") {
      alert("Este correo ya está registrado.");
      return;
    }

    const idHoja = resultado.id;

    console.log("🆔 ID HOJA DE VIDA:", idHoja);

    // =========================
    // ESTUDIOS
    // =========================

    const datosEstudio = {
      nivel: Persona.nivel,
      institucion: Persona.institucion,
      titulo: Persona.titulo,
      anio_graduacion: Persona.anio
    };

    console.log("🎓 ESTUDIO:", datosEstudio);

    const respuestaEstudio = await fetch(
      `http://127.0.0.1:5000/api/registrarestu/${idHoja}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datosEstudio)
      }
    );

    const resultadoEstudio =
      await respuestaEstudio.json();

    console.log(
      "📚 RESPUESTA ESTUDIO:",
      resultadoEstudio
    );

    if (!respuestaEstudio.ok) {
      alert("Error guardando los estudios.");
      return;
    }

    // =========================
    // CURSOS
    // =========================

    for (const curso of datos.cursos || []) {

      console.log("📖 GUARDANDO CURSO:", curso);

      const respuestaCurso = await fetch(
        `http://127.0.0.1:5000/api/registrarcurso/${idHoja}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nombre: curso
          })
        }
      );

      const resultadoCurso =
        await respuestaCurso.json();

      console.log(
        "📖 RESPUESTA CURSO:",
        resultadoCurso
      );

      if (!respuestaCurso.ok) {
        alert("Error guardando un curso.");
        return;
      }
    }

    // =========================
    // EXPERIENCIAS
    // =========================

    for (const experiencia of datos.Experiencia || []) {

      const datosExperiencia = {
        empresa: experiencia.empresa,
        cargo: experiencia.cargo,
        tiempo: experiencia.tiempo,
        funciones: experiencia.funciones
      };

      console.log(
        "💼 EXPERIENCIA:",
        datosExperiencia
      );

      const respuestaExperiencia = await fetch(
        `http://127.0.0.1:5000/api/registrarexpe/${idHoja}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(datosExperiencia)
        }
      );

      const resultadoExperiencia =
        await respuestaExperiencia.json();

      console.log(
        "💼 RESPUESTA EXPERIENCIA:",
        resultadoExperiencia
      );

      if (!respuestaExperiencia.ok) {
        alert("Error guardando la experiencia.");
        return;
      }

      const idExperiencia =
        resultadoExperiencia.id;

      // =========================
      // HABILIDADES
      // =========================

      if (
        experiencia.habilidades &&
        idExperiencia
      ) {

        const habilidades =
          experiencia.habilidades
            .split(",")
            .map((habilidad) => habilidad.trim())
            .filter(
              (habilidad) => habilidad !== ""
            );

        for (const habilidad of habilidades) {

          console.log(
            "🛠️ GUARDANDO HABILIDAD:",
            habilidad
          );

          const respuestaHabilidad =
            await fetch(
              `http://127.0.0.1:5000/api/registrarhabilidad/${idExperiencia}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  nombre: habilidad
                })
              }
            );

          const resultadoHabilidad =
            await respuestaHabilidad.json();

          console.log(
            "🛠️ RESPUESTA HABILIDAD:",
            resultadoHabilidad
          );

          if (!respuestaHabilidad.ok) {
            alert(
              "Error guardando una habilidad."
            );
            return;
          }
        }
      }
    }

    console.log(" TODO TERMINÓ CORRECTAMENTE");

    alert(
      "¡Hoja de vida guardada correctamente!"
    );

  } catch (error) {

    console.error(
      " ERROR COMPLETO:",
      error
    );

    alert(
      "Error al conectar con el servidor. Mira la consola."
    );
  }
};

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
        guardarHojavida = {guardarhojavida}
       />
       )}

      <Footer />
    </>
  );
}


export default App;