


function VistaPrevia({Aprendiz,datos,anterior}) {

  return (
    <div className="formulario">

      <h2>Vista Previa - Hoja de Vida</h2>

      <h3>Datos Personales</h3>

      <p>Nombre: {Aprendiz.nombre}</p>
      <p>Edad: {Aprendiz.edad}</p>
      <p>Ciudad: {Aprendiz.ciudad}</p>
      <p>Correo: {Aprendiz.correo}</p>
      <p>Programa: {Aprendiz.programa}</p>
      <p>Ficha: {Aprendiz.ficha}</p>
      <p>Jornada: {Aprendiz.jornada}</p>


      <h3>Información Académica</h3>

      <p>Nivel de formación: {Aprendiz.nivel}</p>
      <p>Título obtenido: {Aprendiz.titulo}</p>
      <p>Institución: {Aprendiz.institucion}</p>
      <p>Año de graduación: {Aprendiz.anio}</p>


      <h3>Cursos Realizados</h3>

      <div className="lista-cursos">

        {(datos.cursos || []).map(
          (curso, indice) => (

            <div
              className="curso"
              key={indice}
            >

              <p>
                {curso}
              </p>

            </div>

          )
        )}

      </div>

      <h3>Experiencia Laboral</h3>

      <div className="lista-Experiencia">

        {(datos.Experiencia || []).map(
          (experiencia, indice) => (

            <div
              className="Experiencia"
              key={indice}
            >

              <h4>
                Empresa {indice + 1}: {experiencia.empresa}
              </h4>

              <p>
                Cargo: {experiencia.cargo}
              </p>

              <p>
                Tiempo de experiencia: {experiencia.tiempo}
              </p>

              <p>
                Funciones: {experiencia.funciones}
              </p>

              <p>
                Habilidades técnicas: {experiencia.habilidades}
              </p>

            </div>

          )
        )}

      </div>

      <button
        type="button"
        onClick={anterior}
      >
        Anterior
      </button>

    </div>
  );
}

export default VistaPrevia;