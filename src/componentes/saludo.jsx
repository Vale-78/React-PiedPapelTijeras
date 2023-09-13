// import { useState } from "react";

const Saludo = ({ name, setName}) => {
  // const [inputValue, setInputValue] = useState('');
    
 const handleInputChange = (event) => {
       setName(event.target.value);
     };

    
  return (
    <div>
      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        required
        onChange={handleInputChange}
      />
      <p>Bienvenido/a {name}</p>
    </div>
  );
};
export { Saludo };
