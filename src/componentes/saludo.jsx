const estilos = {
  input: {
    fontfamily: "-apple-system",
    color: "rgb(135 65 193)",
    border: "3px solid",
    borderRadius: "9px",
    fontSize: "large",
    padding: "8px",
    width: "15rem", 
  },
  container: {
    maxWidth: "950px",
    margin: "0 auto",
    border: "1px solid #e6e6e6",
  },
  saludo: {
    fontfamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
    fontWeight: "bolder",
    color: " rgb(92 55 124)",
    fontSize: "2rem",
  },
   
};
const Saludo = ({ name, setName, desbloquearJuego}) => {
  function iniciar() {
    desbloquearJuego(1);
  }
    
 const handleInputChange = (event) => {
       setName(event.target.value);
       iniciar();
     };

    
  return (
    <div style={estilos.container}>
      <input
        style={estilos.input}
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Ingresa tu nombre para jugar"
        value={name}
        required
        onChange={handleInputChange}
      />
      <p style={estilos.saludo}>Bienvenido/a {name}</p>
    </div>
  );
};
export { Saludo };
