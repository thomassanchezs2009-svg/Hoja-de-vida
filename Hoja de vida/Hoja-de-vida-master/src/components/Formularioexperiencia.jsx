import { useState } from "react";

function FormularioExperiencia({datos, setDatos,siguiente,anterior}) {
  const [nuevaExperiencia, setNuevaExperiencia] = useState({
    empresa: "",
    cargo: "",
    tiempo: "",
    funciones: "",
    habilidades: ""
  });


  const agregarExperiencia = () => {

    if (
      nuevaExperiencia.empresa.trim() === "" ||
      nuevaExperiencia.cargo.trim() === "" ||
      nuevaExperiencia.tiempo.trim() === "" ||
      nuevaExperiencia.funciones.trim() === "" ||
      nuevaExperiencia.habilidades.trim() === ""
    ) {
      alert("Ingrese todos los datos");
      return;
    }


    setDatos({
      ...datos, Experiencia: [
      ...datos.Experiencia,nuevaExperiencia]
    });

    setNuevaExperiencia({
      empresa: "",
      cargo: "",
      tiempo: "",
      funciones: "",
      habilidades: ""
    });

  };


  const eliminarExperiencia = (indice) => {

    const ExperienciaActualizados = datos.Experiencia.filter(
      (_, i) => i !== indice
    );

    setDatos({
      ...datos,
      Experiencia: ExperienciaActualizados
    });

  };


  const continuar = (e) => {
    e.preventDefault();

    if (datos.Experiencia.length === 0) {
        alert("Ingrese al menos una experiencia laboral");
        return;
    }

    if (siguiente) {
        siguiente();
    }
};

  return (
    <div className="formulario">

      <h2>Información de experiencia</h2>

      <form onSubmit={continuar}>

        <div className="grupo">

          <label>Nombre de la empresa</label>

          <input
            type="text"
            placeholder="Ingrese el nombre"
            value={nuevaExperiencia.empresa}
            onChange={(e) =>
              setNuevaExperiencia({
                ...nuevaExperiencia,
                empresa: e.target.value
              })
            }
          />

        </div>


        <div className="grupo">

          <label>Cargo</label>

          <input
            type="text"
            placeholder="Ingrese el cargo"
            value={nuevaExperiencia.cargo}
            onChange={(e) =>
              setNuevaExperiencia({
                ...nuevaExperiencia,
                cargo: e.target.value
              })
            }
          />

        </div>


        <div className="grupo">

          <label>Tiempo de experiencia</label>

          <input
            type="text"
            placeholder="Ejemplo 1 año"
            value={nuevaExperiencia.tiempo}
            onChange={(e) =>
              setNuevaExperiencia({
                ...nuevaExperiencia,
                tiempo: e.target.value
              })
            }
          />

        </div>


        <div className="grupo">

          <label>Funciones laborales</label>

          <input
            type="text"
            placeholder="Ejemplo administrador"
            value={nuevaExperiencia.funciones}
            onChange={(e) =>
              setNuevaExperiencia({
                ...nuevaExperiencia,
                funciones: e.target.value
              })
            }
          />

        </div>


        <div className="grupo">

          <label>Habilidades técnicas</label>

          <input
            type="text"
            placeholder="Ejemplo programador"
            value={nuevaExperiencia.habilidades}
            onChange={(e) =>
              setNuevaExperiencia({
                ...nuevaExperiencia,
                habilidades: e.target.value
              })
            }
          />

        </div>


        <button
          type="button"
          onClick={agregarExperiencia}
        >
          + Agregar empresa
        </button>

        <div className="lista-Experiencia">

          {
            datos.Experiencia.map(
              (experiencia, indice) => (

                <div
                  className="Experiencia"
                  key={indice}
                >

                  <h3>
                    {experiencia.empresa}
                  </h3>

                  <p>
                    Cargo: {experiencia.cargo}
                  </p>

                  <p>
                    Tiempo: {experiencia.tiempo}
                  </p>

                  <p>
                    Funciones: {experiencia.funciones}
                  </p>

                  <p>
                    Habilidades: {experiencia.habilidades}
                  </p>


                  <button
                    type="button"
                    onClick={() =>
                      eliminarExperiencia(indice)
                    }
                  >
                    Eliminar
                  </button>

                </div>

              )
            )
          }

        </div>


        <button type="submit">
          Vista previa
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

export default FormularioExperiencia;