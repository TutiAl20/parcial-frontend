import React, { useState } from "react";
import Message from "./Message";

const Form = ({ selected }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  //Crear un estado para renderizar el mensaje de error

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    //Faltan hacer las validaciones
    setFlag(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Comprar entrada de {selected.artista}</button>
      </form>
      {flag ? <Message name={name} email={email} /> : null}
    </div>
  );
};

export default Form;
