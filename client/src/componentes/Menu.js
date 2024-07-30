import React from "react";
import "../css/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <div>
        <ul>
          <li>
            <Link className="item" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/formulario">
              Registro Actividad
            </Link>
          </li>
          <li>
            <Link className="item" to="/consulta">
              Consultar Registros
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
