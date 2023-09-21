import React, { useState } from "react";
import { Juego } from "../componentes/Juego";
const estilos = {
  boton: {
    fontfamily: "-apple-system",
    fontWeight: "bolder",
    color: "aliceblue",
    backgroundColor:"rgb(92, 55, 124)",
    border: "5px solid",
    borderRadius: "8px",
    fontSize: "1rem",
    padding: "7px",
  },
  mensaje: {
    fontFamily: "-apple-system",
    fontSize:"1.5rem"
  },
};
const IniciarJuego = ({ mostrarComponente, setMostrarComponente,puntajes,
  setPuntajes,
  ganador,
  setGanador,
  name,
  mensaje,
  setMensaje,
  resultParcial,
  setResultParcial,
  desbloquearJuego,
setDesbloquearJuego}) => {
    return (
    <div>
      <p style={estilos.mensaje}>Ya estás listo para comenzar?, entonces inicia tu juego!!</p>
      <p style={estilos.mensaje}>👇🏽👇🏽👇🏽</p>

      <button
        id="startButtonJuego"
        style={estilos.boton}
        className="botonIniciar"
        onClick={() => setMostrarComponente(!mostrarComponente)}
        type="submit"
      >
        Iniciar Juego
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente &&   <Juego
            puntajes={puntajes}
            setPuntajes={setPuntajes}
            ganador={ganador}
            setGanador={setGanador}
            name={name}
            mensaje={mensaje}
            setMensaje={setMensaje}
            resultParcial={resultParcial} 
            setResultParcial={setResultParcial}
            desbloquearJuego={setDesbloquearJuego}
          />}
      </div>
    </div>
  );
};
export { IniciarJuego };




export default function App() {
  /*Estado para mostrar u ocultar*/
  const [mostrarComponente, setMostrarComponente] = useState(true);
  return (
    <>
      {/*Con un estado adicional le dicen cuando mostrarse o no*/}
      <button onClick={() => setMostrarComponente(!mostrarComponente)}>
        {/*Aqui solo cambio el texto de mi boton, para el ejemplo */}
        {mostrarComponente ? `Ocultar` : `Mostrar`}
      </button>
      <div className={mostrarComponente ? "show-element" : null}>
        {mostrarComponente && <h1>Este puede ser otro componente</h1>}
      </div>
    </>
  );
}