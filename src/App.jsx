import { useState } from "react";
import foto from "./assets/persona.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="contenedor">
        <div className="card">
          <img src={foto} alt="Foto de perfil" className="foto" />

          <h1>HOJA DE VIDA APRENDIZ</h1>

          <section>
            <h2>Información Personal</h2>
            <p><strong>Nombre:</strong> Jesus David</p>
            <p><strong>Edad:</strong> 20 años</p>
            <p><strong>Ciudad:</strong> Bogotá</p>
            <p><strong>Correo:</strong> duenasjesus2005@gmail.com</p>
            <p><strong>Programa:</strong> Tecnólogo en Análisis y Desarrollo de Software </p>
          </section>

          <section>
            <h2>Cursos Realizados</h2>
            <p>Fundamentos de Programación</p>
            <p>HTML y CSS</p>
            <p>JavaScript Básico</p>
          </section>

          <section>
            <h2>Perfil Profesional</h2>
            <p>
              Deseo aprender React porque es una de las bibliotecas más
              utilizadas para desarrollar interfaces web y aplicaciones móviles.
              Me gustaría utilizarla en mi proyecto.
            </p>
          </section>


        </div>
      </div>
    </>
  );
}

export default App;