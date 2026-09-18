import { useState } from "react";

function FormularioAcademico({
  Persona,
  setPersona,
  datos,
  setDatos,
  siguiente,
  anterior
}) {
  const [nuevoCurso, setNuevoCurso] = useState("");

  const agregarCurso = () => {
    if (nuevoCurso.trim() === "") {
      alert("Ingrese el nombre del curso");
      return;
    }

    setDatos({
      ...datos,
      cursos: [...(datos.cursos || []), nuevoCurso]
    });

    setNuevoCurso("");
  };

  const eliminarCursos = (indice) => {
    const cursosActualizados = (datos.cursos || []).filter(
      (_, i) => i !== indice
    );

    setDatos({
      ...datos,
      cursos: cursosActualizados
    });
  };

  const continuar = (e) => {
    e.preventDefault();

    // Evitamos que cualquier campo sea undefined
    const nivel = Persona?.nivel ?? "";
    const titulo = Persona?.titulo ?? "";
    const institucion = Persona?.institucion ?? "";
    const anio = Persona?.anio ?? "";

    if (nivel.toString().trim() === "") {
      alert("Seleccione el nivel de formación");
      return;
    }

    if (titulo.toString().trim() === "") {
      alert("Ingrese el título obtenido");
      return;
    }

    if (!datos?.cursos || datos.cursos.length === 0) {
      alert("Ingrese al menos un curso");
      return;
    }

    if (institucion.toString().trim() === "") {
      alert("Ingrese la institución educativa");
      return;
    }

    if (anio.toString().trim() === "") {
      alert("Ingrese el año de graduación");
      return;
    }

    if (siguiente) {
      siguiente();
    }
  };

  return (
    <div className="formulario">
      <h2>Información Académica</h2>

      <form onSubmit={continuar}>

        {/* NIVEL DE FORMACIÓN */}
        <div className="grupo">
          <label>Nivel de Formación</label>

          <select
            value={Persona?.nivel ?? ""}
            onChange={(e) =>
              setPersona({
                ...Persona,
                nivel: e.target.value
              })
            }
          >
            <option value="">Seleccione</option>
            <option value="Técnico">Técnico</option>
            <option value="Tecnólogo">Tecnólogo</option>
            <option value="Profesional">Profesional</option>
          </select>
        </div>

        {/* TÍTULO */}
        <div className="grupo">
          <label>Título Obtenido</label>

          <input
            type="text"
            placeholder="Ingrese el título"
            value={Persona?.titulo ?? ""}
            onChange={(e) =>
              setPersona({
                ...Persona,
                titulo: e.target.value
              })
            }
          />
        </div>

        {/* CURSOS */}
        <div className="grupo">
          <label>Cursos Realizados</label>

          <input
            type="text"
            placeholder="Ingrese los cursos"
            value={nuevoCurso}
            onChange={(e) => setNuevoCurso(e.target.value)}
          />

          <button type="button" onClick={agregarCurso}>
            + Agregar
          </button>
        </div>

        {/* LISTA DE CURSOS */}
        <div className="lista-cursos">
          {(datos?.cursos || []).map((curso, indice) => (
            <div className="curso" key={indice}>
              <span>{curso}</span>

              <button
                type="button"
                onClick={() => eliminarCursos(indice)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>

        {/* INSTITUCIÓN */}
        <div className="grupo">
          <label>Institución Educativa</label>

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={Persona?.institucion ?? ""}
            onChange={(e) =>
              setPersona({
                ...Persona,
                institucion: e.target.value
              })
            }
          />
        </div>

        {/* AÑO */}
        <div className="grupo">
          <label>Año de Graduación</label>

          <input
            type="number"
            placeholder="Ejemplo: 2026"
            value={Persona?.anio ?? ""}
            onChange={(e) =>
              setPersona({
                ...Persona,
                anio: e.target.value
              })
            }
          />
        </div>

        {/* BOTONES */}
        <button type="submit">
          Continuar registro
        </button>

        <button
          type="button"
          onClick={anterior}
        >
          Anterior
        </button>

      </form>
    </div>
  );
}

export default FormularioAcademico;