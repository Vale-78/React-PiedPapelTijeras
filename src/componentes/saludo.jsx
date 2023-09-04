import EntradaSaludo  from './EntradaSaludo';
import MostrarSaludo from './MostrarSaludo';

export default function Saludo(){
    return ( 
    <div>
      <p>Saludo</p>
      <EntradaSaludo/>
      <MostrarSaludo/>
      
    </div>)
  }
  
  // import PropTypes from 'prop-types'

  // const Saludo = (props) => {
  //   return (
  //     <p data-testid="saludo">
  //       Hola, {props.nombre}

  //       <EntradaSaludo/>
  //     <MostrarSaludo/>
  //     </p>
  //   )
  // }
  
  // Saludo.propTypes = {
  //   nombre: PropTypes.string,
  // }
  
  // export default Saludo