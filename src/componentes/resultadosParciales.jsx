const ResultadosParciales = ({ jugadaElegida, setJugadaElegida }) => {
  const increment = () => {
    setJugadaElegida(jugadaElegida + 1);
  };
  return (
    <div>
      <button onClick={increment}>{jugadaElegida}</button>
    </div>
  );
};
export {ResultadosParciales};