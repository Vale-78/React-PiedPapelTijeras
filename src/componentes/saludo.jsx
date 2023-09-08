import EntradaSaludo  from './EntradaSaludo';
import MostrarSaludo from './MostrarSaludo';
// import { useState } from "react";



  <><EntradaSaludo/>
     <MostrarSaludo/>;
  </>
  
  

const Saludo = ({nombre, addNombre}) =>{
        
return(<div> 
    <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder='Ingresa tu nombre'
            className="ingresoUsuario"
            value={nombre}
            required
            onChange={(event) => addNombre(event.target.value)}
          />
 <p>Bienvenido/a {nombre}</p>
 <p>Ya estás listo para comenzar?, entonces inicia tu juego!!👉🏻👉🏾</p>
 {/* <button id="startButton" className="botonIniciar" onClick={enviarMensaje} type="submit">Iniciar Saludo</button> */}
</div>
)}

export {Saludo};


