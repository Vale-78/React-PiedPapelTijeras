function Botones({
  tipo,
  name, 
  setName,
  ganador,
  setGanador,
  ganaJugador,
  setGanaJugador,
  ganaPC,
  setGanaPC,
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
  resultadoParcial,
  setResultadoParcial,
}) {
  function aleatorio(n) {
    return Math.floor(Math.random() * n);
  }
  function calcularJugadaComputadora() {
    let jugadaCompu;
    let eleccionAleatoria = aleatorio(3);

    if (eleccionAleatoria === 0) {
      jugadaCompu = "piedra";
      resultado = "La compu eligió Piedra 🪨";
    } else if (eleccionAleatoria === 1) {
      jugadaCompu = "papel";
      resultado = "La compu eligió Papel 🧻";
    } else if (eleccionAleatoria === 2) {
      jugadaCompu = "tijeras";
      resultado = "La compu eligió Tijeras ✂️";
    }
    setMostrarResultado(true);
    setCompuSelec(resultado);
    return jugadaCompu;
  }

  function determinarJugadaUsuario() {
    if (tipo === "piedra") {
      jugadorSelec = "Elegiste  Piedra 🪨";
    } else if (tipo === "papel") {
      jugadorSelec = "Elegiste Papel 🧻";
    } else if (tipo === "tijeras") {
      jugadorSelec = "Elegiste Tijeras ✂️";
    }
    setJugadorSelec(jugadorSelec);
    return tipo;
  }

  function determinarGanador(eleccionUsuario, eleccionCompu) {
    console.log(eleccionUsuario);
    console.log(eleccionCompu);
    if (ganaJugador < 3 && ganaPC < 3) {
            if (eleccionCompu === eleccionUsuario) {
              resultadoParcial="Empate";
            } else if (
              (eleccionCompu === "piedra" && eleccionUsuario === "tijeras") ||
              (eleccionCompu === "papel" && eleccionUsuario === "piedra") ||
              (eleccionCompu === "tijeras" && eleccionUsuario === "papel")
            ) {
              resultadoParcial="Gana la compu";
              setGanaPC(ganaPC + 1);
            } else {
              resultadoParcial="Ganaste!!!";
              setGanaJugador(ganaJugador + 1);
            }setResultadoParcial(resultadoParcial);
     } if (ganaJugador === 3 || ganaPC === 3) {
     let jugadorGana = ganaJugador;
     let compuGana = ganaPC;
     resultadoFinalfin(jugadorGana, compuGana);
     }
    function resultadoFinalfin(jugadorGana, compuGana) {
      if (jugadorGana > compuGana) {
        resultFinal="Felicitaciones "+ {setName}+ ",  Ganaste!!!!";
        
      } else {
        resultFinal="Lo siento "+ {setName}+ ", Gana la Computadora.";
      }
      setResultFinal(resultFinal);
    setMostrarResultado(true);
  return resultFinal;
    }
   }
  

  //     function reiniciar(){
  //     //   jugadaUsuario=0
  //     //   setMostrarResultado=0
  //     //   compuSelec=""
  //     //   setResultado=0
  //       ganaPC=0
  //     //   setGanaPC=0
  //       ganaJugador=0
  //       setGanaJugador=0

  //     //  {ganadas,perdidas}
  //   }

  function jugar() {
    const jugadaComputadora = calcularJugadaComputadora();
    // console.log(jugadaComputadora);
    const jugadaUsuario = determinarJugadaUsuario();
    const ganadorFinal = determinarGanador(jugadaUsuario, jugadaComputadora);
    resultFinal = ganadorFinal;
  }
  return (
    <div>
      <button onClick={jugar}>{tipo}</button>
    </div>
  );
}
export { Botones };
