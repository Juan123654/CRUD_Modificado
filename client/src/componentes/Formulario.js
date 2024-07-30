import React from "react";
import { useState } from "react";
import Axios from "axios";

import "../css/Formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [pais, setPais] = useState("");
  const [cargo, setCargo] = useState("");
  const [fecha, setFecha] = useState("");

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      pais: pais,
      cargo: cargo,
      fecha: fecha,
    }).then(() => {
      alert("Empleado registrado");
    });
  };
  return (
    <div className="datos">
      <label>
        Nombre:
        <input
          type="text"
          onChange={(event) => {
            setNombre(event.target.value);
          }}
        />
      </label>
      <label>
        Edad:
        <input
          type="text"
          onChange={(event) => {
            setEdad(event.target.value);
          }}
        />
      </label>
      <label>
        Pais:
        <input
          type="text"
          onChange={(event) => {
            setPais(event.target.value);
          }}
        />
      </label>
      <label>
        Cargo:
        <input
          type="text"
          onChange={(event) => {
            setCargo(event.target.value);
          }}
        />
      </label>
      <label>
        Fecha:
        <input
          type="date"
          onChange={(event) => {
            setFecha(event.target.value);
          }}
        />
      </label>
      <button onClick={add}>Registrar</button>
    </div>
  );
}

export default Formulario;
