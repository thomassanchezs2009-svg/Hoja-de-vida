import { useState } from "react";

function FormularioAcademico({
  Aprendiz,
  setAprendiz,
  datos,
  setDatos,
  siguiente,
  anterior
}) {

  const [nuevoCurso, setNuevoCurso] = useState("");


  // AGREGAR CURSO
  const agregarCurso = () => {

    if (nuevoCurso.trim() === "") {
      alert("Ingrese el nombre del curso");
      return;
    }

    setDatos({
      ...datos,
      cursos: [...datos.cursos, nuevoCurso]
    });

    setNuevoCurso("");
  };


  // ELIMINAR CURSO
  const eliminarCursos = (indice) => {

    const cursosActualizados = datos.cursos.filter(
      (_, i) => i !== indice
    );

    setDatos({
      ...datos,
      cursos: cursosActualizados
    });
  };


  const continuar = (e) => {

    e.preventDefault();

    alert("Información académica guardada");

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
            value={Aprendiz.nivel}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                nivel: e.target.value
              })
            }
          >

            <option value="">Seleccione</option>
            <option>Técnico</option>
            <option>Tecnólogo</option>
            <option>Profesional</option>

          </select>

        </div>


        <div className="grupo">

          <label>Título Obtenido</label>

          <input
            type="text"
            placeholder="Ingrese el título"
            value={Aprendiz.titulo}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                titulo: e.target.value
              })
            }
          />

        </div>

        <div className="grupo">

          <label>Cursos Realizados</label>

          <input
            type="text"
            placeholder="Ingrese el curso"
            value={nuevoCurso}
            onChange={(e) =>
              setNuevoCurso(e.target.value)
            }
          />

          <button
            type="button"
            onClick={agregarCurso}
          >
            + Agregar
          </button>

        </div>


        {/* LISTA CURSOS */}
        <div className="lista-cursos">

          {
            datos.cursos.map(
              (curso, indice) => (

                <div
                  className="curso"
                  key={indice}
                >

                  <span>
                    {curso}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      eliminarCursos(indice)
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )
          }

        </div>

        <div className="grupo">

          <label>Institución Educativa</label>

          <input
            type="text"
            placeholder="Ingrese la institución"
            value={Aprendiz.institucion}
            onChange={(e) =>
              setAprendiz({...Aprendiz,institucion: e.target.value})
            }
          />

        </div>

        <div className="grupo">

          <label>Año de Graduación</label>

          <input
            type="number"
            placeholder="Ejemplo: 2026"
            value={Aprendiz.anio}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                anio: e.target.value
              })
            }
          />

        </div>


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