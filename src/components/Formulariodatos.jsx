import { useState } from "react";

function Formulariopersona({ siguiente, Persona, setPersona,datos,setDatos}) {

    // funcion del boton
    const Continuar = (e) => {
        e.preventDefault();

        if(Persona.Nombre.trim()===""){
            alert("ingresar nombre")
            return;
        }
        if(Persona.Edad <1 ||Persona.Edad >=100){
            alert("la edad debe estar entre 1 y 100")
            return;
        }
        if(Persona.Ciudad.trim()===""){
            alert("ingresar la ciudad")
            return;
        }
        if(Persona.Programa.trim()===""){
            alert("ingresar programa de formacion")
            return;
        }

        const excorreo = /^[^\s@]+@[^\s@]+$/;
        if(!excorreo.test(Persona.Correo.trim())){
            alert("ingresar correo electronico")
            return;
        }
        
       
        if(Persona.Ficha.trim()===""){
            alert("ingresar nummero de ficha")
            return;
        }
        if(Persona.Jornada.trim()===""){
            alert("ingresar jornada")
            return;
        }

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
                        onChange={(e) => setPersona({...Persona,Foto: e.target.files[0]
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Nombre Completo</label>

                    <input
                        type="text"
                        placeholder="Ingrese su nombre"
                        value={Persona.Nombre}
                        onChange={(e) =>
                            setPersona({...Persona, Nombre: e.target.value
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Edad</label>

                    <input
                        type="number"
                        placeholder="Ingrese su edad"
                        value={Persona.Edad}
                        onChange={(e) =>
                            setPersona({...Persona,Edad: e.target.value
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Ciudad</label>

                    <input
                        type="text"
                        placeholder="Ingrese su ciudad"
                        value={Persona.Ciudad}
                        onChange={(e) =>
                            setPersona({...Persona, Ciudad: e.target.value
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Programa de Formación</label>

                    <input
                        type="text"
                        placeholder="Ejemplo: ADSO"
                        value={Persona.programa}
                        onChange={(e) =>
                            setPersona({ ...Persona,Programa: e.target.value
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Correo Electrónico</label>

                    <input
                        type="email"
                        placeholder="correo@sena.edu.co"
                        value={Persona.Correo}
                        onChange={(e) =>
                            setPersona({...Persona, Correo: e.target.value
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Número de Ficha</label>

                    <input
                        type="number"
                        placeholder="Ingrese su ficha"
                        value={Persona.Ficha}
                        onChange={(e) =>
                            setPersona({ ...Persona,Ficha: e.target.value
                            })
                        }
                    />
                </div>

                <div className="grupo">
                    <label>Jornada</label>

                    <select
                        value={Persona.Jornada}
                        onChange={(e) =>
                            setPersona({...Persona,Jornada: e.target.value })
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

export default Formulariopersona;