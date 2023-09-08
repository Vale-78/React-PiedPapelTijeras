import ResultadosParciales from "./ResultadosParciales";
import ResultadoFinal from "./ResultadoFinal";

 function Resultados(){
  return ( 
      <div>
      {/* <p>resultados {props.nombre}</p> */}
      <ResultadosParciales/>;
      <ResultadoFinal/>
    </div>)
  }
 export {Resultados};
  
