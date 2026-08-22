import { useState } from "react";


function FormularioAcademico({Persona,setPersona, datos,setDatos,siguiente,anterior}) {


  const [nuevoCurso, setNuevoCurso] = useState("");
  
  const agregarCurso = () => {
    if (nuevoCurso.trim() === "") {
      alert("ingrese el nombre del curso");
      return;
    }

    setDatos({
      ...datos,
      cursos: [...datos.cursos, nuevoCurso]
    });

    // limpiar el campo
    setNuevoCurso("");
  };

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

    if (Persona.nivel.trim() ==="") {
        alert("Seleccione el nivel de formación");
        return;
    }

    if (Persona.titulo.trim() === "") {
        alert("Ingrese el título obtenido");
        return;
    }

    if (datos.cursos.length === 0) {
        alert("Ingrese al menos un curso");
        return;
    }

    if (Persona.institucion.trim() === "") {
        alert("Ingrese la institución educativa");
        return;
    }
    
    if(Persona.anio.trim()===""){
            alert("año de graduacion");
            return;
        }

    if (siguiente) {
      siguiente();
    }
  };

  return(
  <div className="formulario">


      <h2>Información Académica</h2>


      <form onSubmit={continuar}>


        <div className="grupo">


          <label>Nivel de Formación</label>


          <select
            value={Persona.nivel}
            onChange={(e) =>
              setPersona({
                ...Persona,
                nivel: e.target.value
              })
            }
          >


            <option value="persona">Seleccione</option>
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
            value={Persona.titulo}
            onChange={(e) =>
              setPersona({...Persona,titulo: e.target.value
              })
            }
          />


        </div>



        <div className="grupo">


          <label>Cursos Realizados</label>


          <input
            type="text"
            placeholder="Ingrese los cursos"
            value={nuevoCurso}
            onChange={(e) =>
              setNuevoCurso(e.target.value)
            }
          />


          <button
            type="button"
            onClick={agregarCurso}
          >
            + agregar
          </button>


        </div>



        {/*mostrar lista*/}


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
            value={Persona.institucion}
            onChange={(e) =>
              setPersona({...Persona,institucion: e.target.value})
            }
          />


        </div>



        <div className="grupo">


          <label>Año de Graduación</label>


          <input
            type="number"
            placeholder="Ejemplo: 2026"
            value={Persona.anio}
            onChange={(e) =>
              setPersona({...Persona,anio: e.target.value})
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