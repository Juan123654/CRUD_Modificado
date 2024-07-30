import express from "express";
import path from "path";
import cors from "cors";
import record from "./db.js";

const app = express();
const dir_front = path.resolve();

app.use(express.static(path.join(dir_front, "client/build")));

// Configurar CORS
app.use(cors());
app.use(express.json());

// Rutas personalizadas
app.post("/record", (req, res) => {
  const { nombre, edad, pais, cargo, fecha } = req.body;
  record(nombre, edad, pais, cargo, fecha);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(dir_front, "client/build/index.html"));
});

app.get("/formulario", function (req, res) {
  res.sendFile(path.join(dir_front, "client/build/index.html"));
});

app.get("/registro", function (req, res) {
  res.sendFile(path.join(dir_front, "client/build/index.html"));
});

app.listen(3001, () => {
  console.log("Servidor iniciado");
});

