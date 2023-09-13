function Botones({
  tipo,
  jugadorPuntos,
  setJugadorPuntos,
  compuPuntos,
  setCompuPuntos,
  resultado,
  setResultado,
  resultFinal,
  setResultFinal,
  mostrarResultado,
  setMostrarResultado,
  compuSelec,
  setCompuSelec,
  jugadorSelec,
  setJugadorSelec,
}) {
  function aleatorio(n) {
    return Math.floor(Math.random() * n);
  }
  function calcularJugadaComputadora() {
    let jugadaCompu;
    let eleccionAleatoria = aleatorio(3);

    if (eleccionAleatoria === 0) {
      jugadaCompu = "piedra";
      setCompuSelec("La compu eligió Piedra 🪨");
    } else if (eleccionAleatoria === 1) {
      jugadaCompu = "papel";
      setCompuSelec("La compu eligió Papel 🧻");
    } else {
      jugadaCompu = "tijeras";
      setCompuSelec("La compu eligió Tijeras ✂️");
    }

    setMostrarResultado(true);
    console.log(jugadaCompu);
    return jugadaCompu;
  }
  function eleccionUsuario(tipo) {
    if (tipo === "piedra") {
      setJugadorSelec("Elegiste Piedra 🪨");
    } else if (tipo === "papel") {
      setJugadorSelec("Elegiste Papel 🧻");
    } else {
      setJugadorSelec("Elegiste Tijeras ✂️");
    }
  }
  eleccionUsuario(tipo);

  function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadorPuntos < 3 && compuPuntos < 3) {
      if (jugadaComputadora === jugadaUsuario) {
        setResultado("Empate");
      } else if (
        (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
        (jugadaComputadora === "papel" && jugadaUsuario === "piedra") ||
        (jugadaComputadora === "tijeras" && jugadaUsuario === "papel")
      ) {
        setResultado("Gana la compu");
        setCompuPuntos(compuPuntos + 1);
      } else {
        setResultado("Ganaste!!!");
        setJugadorPuntos(jugadorPuntos + 1);
      }
      if (jugadorPuntos === 3 || compuPuntos === 3) {
        let jugadorGana = setJugadorPuntos(jugadorPuntos);
        let compuGana = setCompuPuntos(compuPuntos);
        if (jugadorGana > compuGana) {
            setResultFinal("Felicitaciones ,  Ganaste!!!!");
          } else {
            setResultFinal("Lo siento , Gana la Computadora.");
          }
      }
      
      setMostrarResultado(true);
      return resultado;
    }
    return resultFinal;
  }
  //     function reiniciar(){
  //     //   jugadaUsuario=0
  //     //   setMostrarResultado=0
  //     //   compuSelec=""
  //     //   setResultado=0
  //       compuPuntos=0
  //     //   setcompuPuntos=0
  //       jugadorPuntos=0
  //       setJugadorPuntos=0

  //     //  {ganadas,perdidas}
  //   }

  function jugar() {
    const jugadaUsuario = tipo;
    console.log(jugadaUsuario);
    const jugadaComputadora = calcularJugadaComputadora();
    
    determinarGanador(jugadaUsuario, jugadaComputadora)
    
  
   
  }
  return (
    <div>
      <button onClick={jugar()}>{tipo}</button>
    </div>
  );
}
export { Botones };

// const ResultadosParciales = ({ jugadaElegida, setJugadaElegida }) => {
//   const increment = () => {
//     setJugadaElegida(jugadaElegida + 1);
//   };
//   return (
//     <div>
//       <button onClick={increment}>{jugadaElegida}</button>
//     </div>
//   );
// };
// export {ResultadosParciales};
