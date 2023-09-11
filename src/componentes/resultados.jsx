import {ResultadosParciales} from "./ResultadosParciales";
import {ResultadoFinal} from "./ResultadoFinal";

function aleatorio(max) {
  return Math.floor(Math.random() * max);
}
const Resultados = ({
  ganaPC,
  ganaUsuario,
  setGanaPC,
  setGanaUsuario,
  nombre,
  addNombre,
  jugadaElegida,
  setJugadaElegida,
 
}) => {
  setJugadaElegida(aleatorio(3));
  console.log(nombre);
  return (
   
    <div>
      <button onClick={setJugadaElegida}>{jugadaElegida}</button>

      <ResultadosParciales
        jugadaElegida={jugadaElegida}
        setJugadaElegida={setJugadaElegida}
        setGanaPC={setGanaPC}
        setGanaUsuario={setGanaUsuario}
      />
      <ResultadoFinal />
    </div>
  );
};
export {Resultados};

// export const ganaPC = ({ jugadaElegida, setJugadaElegida }) => {
//     const increment = () => {
//         setJugadaElegida(jugadaElegida + 1);

//     }
//     return <div>
//         <button onClick={increment}>{jugadaElegida}</button></div>;
// }
