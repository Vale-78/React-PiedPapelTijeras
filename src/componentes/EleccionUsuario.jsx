
function EleccionUsuario({opciones, jugadorSelec, setJugadorSelec, mostrarResultado, setMostrarResultado, compuSelec, setCompuSelec}) {
         
          const eleccionCompu = () =>{
            const aleatorio = Math.floor(Math.random() * 3) + 1;
            setCompuSelec(opciones[aleatorio]);
            }

           const eleccionUsuario = (event) =>{
            setMostrarResultado(false);
            setJugadorSelec(event.target.value);
            eleccionCompu();

           }
  return (
    
      <div>
      {opciones.map((item)=>
         <button value={item} onClick={eleccionUsuario}>Piedra</button>  )}
      </div>
  );

}
export {EleccionUsuario};



  