import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "../src/componentes/Menu.js";
import Home from "../src/componentes/Home.js";
import Formulario from "../src/componentes/Formulario.js";
import Consulta from "./componentes/Consulta.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/Consulta" element={<Consulta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
