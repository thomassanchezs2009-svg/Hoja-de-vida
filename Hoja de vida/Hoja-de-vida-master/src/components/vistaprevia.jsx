function VistaPrevia({ Persona, datos,anterior,guardarHojavida }) {

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
      <p>Año de graduación: {Persona.anio_graduacion}</p>


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
     <div className="detalle"> 
      {datos.Experiencia && datos.Experiencia.length > 0 ?
       ( datos.Experiencia.map((experiencia, indice) =>
        ( <div key={indice}> 
        <p> Empresa: {experiencia.empresa} </p>
         <p> Cargo: {experiencia.cargo} </p>
          <p> Tiempo de experiencia: {experiencia.tiempo} </p>
           <p> Funciones: {experiencia.funciones} </p>
            <p> Habilidades técnicas: {experiencia.habilidades} </p> 
            <hr />
             </div> 
            )) ) : ( <p>No hay experiencia laboral registrada.</p> )} 
            </div>


      <button type="button" onClick={anterior}>
        Anterior
      </button>
      

     <button onClick={guardarHojavida}>
          Confirmar registro
      </button>

    </div>
  );
}

export default VistaPrevia;