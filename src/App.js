import './App.css';

// npm install --save-dev @babel/plugin-proposal-private-property-in-object
// debí correr este comando para que funcionen mis componentes
//use --save-dev para instalarlo en devDependencies
import Saludo  from './componentes/Saludo';
import IniciarJuego from './componentes/IniciarJuego';
//Iniciar juego es para iniciar y reininiar juego
import Juego from './componentes/Juego';
import Resultados from './componentes/Resultados';
// https://github.com/uqbar-project/eg-hola-mundo-react/tree/master  ejemplo

function App() {
  return (
    <div class="JuegoCompleto">
       <div class="info-container"></div>
          <h1>PIEDRA, PAPEL TIJERAS</h1>
       <div>
        <Saludo/>
       </div>
       <div>
         <IniciarJuego/> 
       </div>
       <div>
        <Juego/>
       </div>
       <div>
        <Resultados/>
       </div>

    </div>
      
    // <div className="App">
    
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
