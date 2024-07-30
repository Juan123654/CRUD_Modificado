import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "empleados_crud",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

let record = (nombre, edad, pais, cargo, fecha) => {
    db.query(
        "INSERT INTO empleados (nombre, edad, pais, cargo, fecha) VALUES (?, ?, ?, ?, ?)",
        [nombre, edad, pais, cargo, fecha],
        (err, result) => {
          if (err) {
            console.error("Error al registrar el empleado: ", err);
          } else {
            console.log("Empleado registrado con éxito");
          }
        }
      );
};

export default record
