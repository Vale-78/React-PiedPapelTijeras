const estilos = {
    input: {
      fontfamily: "-apple-system",
      color: "rgb(92, 55, 124)",
      border: "3px solid",
      borderRadius: "10px",
      fontSize: "1rem",
      padding: "7px",
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
  const SaludarNo = () => {

    return (
      <div style={estilos.container}>
       
        <p style={estilos.saludo}>Debes ingresar tu nombre</p>
      </div>
    );
  };
  export { SaludarNo};