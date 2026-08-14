import { useState } from "react";

function FormularioDatos({ siguiente, Aprendiz, setAprendiz }) {

  // funcion del boton
  const Continuar = (e) => {
    e.preventDefault();

    alert("Los datos fueron ingresados correctamente");

    if (siguiente) {
      siguiente();
    }
  };

  return (

    <div className="formulario">

      <h2>Registro de Aprendices</h2>

      <form onSubmit={Continuar}>

        <div className="grupo">
          <label>Fotografía</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Foto: e.target.files[0]
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Nombre Completo</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
            value={Aprendiz.Nombre}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Nombre: e.target.value
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Edad</label>

          <input
            type="number"
            placeholder="Ingrese su edad"
            value={Aprendiz.Edad}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Edad: e.target.value
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Ciudad</label>

          <input
            type="text"
            placeholder="Ingrese su ciudad"
            value={Aprendiz.Ciudad}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Ciudad: e.target.value
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Programa de Formación</label>

          <input
            type="text"
            placeholder="Ejemplo: ADSO"
            value={Aprendiz.programa}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                programa: e.target.value
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Correo Electrónico</label>

          <input
            type="email"
            placeholder="correo@sena.edu.co"
            value={Aprendiz.Correo}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Correo: e.target.value
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Número de Ficha</label>

          <input
            type="number"
            placeholder="Ingrese su ficha"
            value={Aprendiz.Ficha}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Ficha: e.target.value
              })
            }
          />
        </div>

        <div className="grupo">
          <label>Jornada</label>

          <select
            value={Aprendiz.Jornada}
            onChange={(e) =>
              setAprendiz({
                ...Aprendiz,
                Jornada: e.target.value
              })
            }
          >
            <option>Mañana</option>
            <option>Tarde</option>
            <option>Noche</option>
            <option>Mixta</option>
          </select>

        </div>

        <button type="submit">
          Continuar registro
        </button>

      </form>

    </div>

  );
}

export default FormularioDatos;