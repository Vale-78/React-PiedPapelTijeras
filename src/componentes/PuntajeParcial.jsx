import React from "react";

function PuntajeParcial({ puntajes , resultParcial, setResultParcial}) {
  return (
    <div>
      <p>Jugador: {puntajes.jugador}</p>
      <p>Computadora: {puntajes.computadora}</p>
      <h3>{resultParcial}</h3>
    </div>
  );
}
export { PuntajeParcial };
