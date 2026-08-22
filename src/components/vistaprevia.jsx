function VistaPrevia({ Persona, datos,anterior }) {

  return (
    <div className="formulario">

      <h2>Vista Previa</h2>

      <h3>Datos Personales</h3>

      <p>Nombre: {Persona.Nombre}</p>
      <p>Edad: {Persona.Edad}</p>
      <p>Ciudad: {Persona.Ciudad}</p>
      <p>Correo: {Persona.Correo}</p>
      <p>Programa: {Persona.Programa}</p>
      <p>Ficha: {Persona.Ficha}</p>
      <p>Jornada: {Persona.Jornada}</p>


      <h3>Información Académica</h3>

      <p>Nivel de formación: {Persona.nivel}</p>
      <p>Título obtenido: {Persona.titulo}</p>
      <p>Institución: {Persona.institucion}</p>
      <p>Año de graduación: {Persona.anio}</p>


      <div className="detalle">

        <span>Cursos</span>

        <div>

          {datos.cursos.map((curso, indice) => (

            <p key={indice}>
              {curso}
            </p>

          ))}

        </div>

      </div>


      <h3>Experiencia Laboral</h3>

      <p>Empresa: {Persona.empresa}</p>
      <p>Cargo: {Persona.cargo}</p>
      <p>Tiempo de experiencia: {Persona.tiempo}</p>
      <p>Funciones: {Persona.funciones}</p>
      <p>Habilidades técnicas: {Persona.habilidades}</p>


      <button type="button" onClick={anterior}>
        Anterior
      </button>

    </div>
  );
}

export default VistaPrevia;