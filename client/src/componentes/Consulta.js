import React from "react";
import { useState } from "react";
import Axios from "axios";
import "../css/Consulta.css";

function Registro() {
  const [registrosList, setEmpleados] = useState([]);

  const getEmpleados = () => {
    Axios.get("http://localhost:3001/registros").then((response) => {
      setEmpleados(response.data);
    });
  }

  return (
    <div className="datos">
      <button onClick={getEmpleados}>Consulta</button>
      {registrosList.map((val, key) => {
        return <div className="">{val.nombre}</div>;
      })}
    </div>
  );
}

export default Registro;
