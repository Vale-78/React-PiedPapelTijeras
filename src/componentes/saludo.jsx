// import { useState } from "react";

const Saludo = ({ nombre, addNombre }) => {
  return (
    <div>
      <input
        id="nombre"
        name="nombre"
        type="text"
        placeholder="Ingresa tu nombre"
        className="ingresoUsuario"
        value={nombre}
        required
        onChange={(event) => addNombre(event.target.value)}
      />
      <p>Bienvenido/a {nombre}</p>
    </div>
  );
};
export { Saludo };
