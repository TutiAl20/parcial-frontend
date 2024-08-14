import React, { useState } from "react";
import { espectaculos } from "../espectaculos";
import Espectaculo from "./Espectaculo";
import Form from "./Form";

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
    </div>
  );
};

export default Shows;
