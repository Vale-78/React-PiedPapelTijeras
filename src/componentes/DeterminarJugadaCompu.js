function DeterminarJugadaCompu({
    jugadaElegida,
    setJugadaElegida,
    jugadaCompu,
    eleccionUsuario,
    tipo,
  }) {
    return (
      <div>
        {determinarJugadaComputadora(jugadaCompu)}
        {determinarJugadaUsuario(eleccionUsuario)}
       
      </div>
    );
  }
  export {DeterminarJugadaCompu};

  function aleatorio(x) {
    return Math.floor(Math.random() * x) + 1;
  }

  function determinarJugadaComputadora() {
    let pc;
    let eleccionAleatoria = aleatorio(3);
    if (eleccionAleatoria === 0) {
      pc=0;
      return "La compu eligió Piedra 🪨";
      
    } else if (eleccionAleatoria === 1) {
      pc = 1;
      return "La compu eligió Papel 🧻";
    } else if(eleccionAleatoria === 2){
      pc=2;
      return "La compu eligió Tijeras ✂️";
    }
     return pc; 
    }
    
  
  function determinarJugadaUsuario(usuario) {
    let jugador;
    if (usuario === 0) {
      jugador = 0;
      return "Elegiste Piedra 🪨";
    } else if (usuario === 1) {
      jugador = 1;
      return "Elegiste Papel 🧻";
    } else if (usuario === 2) {
      jugador = 2;
      return "Elegiste Tijeras ✂️";
     
    }
    return jugador;
  }
  let compu= determinarJugadaComputadora(jugadaCompu);
  let usuario =determinarJugadaUsuario(eleccionUsuario);
function determinarGanador(compu, usuario){
  if(compu===usuario){
            
}else if((compu===0 && usuario ===2) || (compu===1 && usuario === 0 ) || (compu===2 && usuario === 1)){
   
}else{
   
}  
}
