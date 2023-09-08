import './App.css';

// npm install --save-dev @babel/plugin-proposal-private-property-in-object
// debí correr este comando para que funcionen mis componentes
//use --save-dev para instalarlo en devDependencies
import {Saludo}  from './componentes/Saludo';
import IniciarJuego from './componentes/IniciarJuego';
//Iniciar juego es para iniciar y reininiar juego
import Juego from './componentes/Juego';
import {Resultados} from './componentes/Resultados';
import InfoTitulo from './componentes/InfoTitulo';
import { useState } from 'react';
import React from 'react';

// https://github.com/uqbar-project/eg-hola-mundo-react/tree/master  ejemplo

function App() {
  const [values, setValues] = useState("");
 console.log("hola "+ values)
  
  return (
    <div className="App">    
          <div className="info-container">
             <InfoTitulo/>
          </div>  

       {/* <section id="saludoContainer" className='usuarioNameContainer'> */}
      
      
        <Saludo nombre={values} addNombre={setValues}/>
      
        {/* </section> */}
         
         
      
        <div>
          <Resultados/>
        </div>
        
          {/* <section id="inicarJuego"> */}
            <div className="iniciarJuego">
            let inicarJuego = "",
                  <IniciarJuego  iniciarJuego={IniciarJuego} /> 
            
            </div>
         {/* </section> */}
    
        {/* <section id="seleccionar-jugada"> */}
            <div>
                <Juego/>
              </div>
              <p>El mejor de 5 jugadas gana. Los empates no se cuentan. Éxitos!!</p>
              <div className="botones-container">
                <div className="botones">
                  <div className="efecto">
                    <button id="Piedra">
                      <img id="piedra" src="./assest/piedra.png" alt="" />
                    </button>
                    <button id="Papel">
                      <img id="papel" src="./assest/papel.png" alt="" />
                    </button>
                    <button id="Tijeras">
                      <img id="tijeras" src="./assest/tijeras.png" alt="" />
                    </button>
                  </div>
                  <div className="parrafos">
                    <p id="eleccionJugador" className="p1" />
                    <p id="eleccionCompu" className="p2" />
                    <p id="resultadoRonda" className="p3" />
                    <p id="numeroGanaUsuario" className="p4" />
                    <p id="numeroGanaPC" className="p5" />
                    <p id="resultFinal" className="p6" />
                  </div>
                </div>
              </div>
            {/* </section> */}

        {/* <section id="reiniciarJuego"> */}
          <div className="boton-reiniciar">
            <button id="resetButton" className="botonReiniciar">
              Reiniciar Juego
            </button>
          </div>
        {/* </section> */}
</div>
  );
}

export default App;
