import React, { useState } from "react";
import { espectaculos } from "../espectaculos";
import Espectaculo from "./Espectaculo";
import Form from "./Form";
import Form1 from './Formulariomotos';

const Shows = () => {
  const [selected, setSelected] = useState(null);
  console.log(selected);
  return (
    <div>
      {selected ? <Form selected={selected} /> : null}
      {espectaculos.map((espectaculo) => (
        <Espectaculo
          key={espectaculo.id}
          espectaculo={espectaculo}
          setSelected={setSelected}
        />
      ))}

    <h1>Formulario Motos</h1>
      <Form1 />
    </div>
  );
};

export default Shows;