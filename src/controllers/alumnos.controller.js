import { getConnection, querys, sql } from "../models/index.js";

//Función para crear un registro de un alumno
export const crearAlumno = async (req, res) => {
  let { nombre } = req.body;
  let { apellidos } = req.body;

  
  
  // validacion
  if (nombre == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
  }
  else if (apellidos == null) {
      return res.status(400).json({ msg: "Por favor llene el campo del apellido requerido apellidos" });
    }



  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("apellidos", sql.VarChar, apellidos)
      .query(querys.crearAlumno);

    res.json({ nombre, apellidos });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos alumnos
export const getAlumnos = async (req, res) => {
try {

  const pool = await getConnection();

  const result = await pool
  .request()
  .query(querys.getAlumnos);

  res.json(result.recordset);

} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un alumno escogiendo el id
export const getAlumnoById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.getAlumnoById);

  return res.json(result.recordset[0]);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un alumno
export const actualizarAlumno = async (req, res) => { 
const { nombre } = req.body; 
const { apellido } = req.body;

// validacion

if (nombre == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido" });
}
if (apellido == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido" });
}

try {
  const pool = await getConnection();
  await pool
    .request()
    .input("nombre", sql.VarChar, nombre)
    .input("apellido", sql.VarChar, apellido)
    .input("id", req.params.id)
    .query(querys.actualizarAlumno);
  res.json({ apellido, nombre });
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un alumno escogiendo el id
export const borrarAlumnoById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.borrarAlumnoById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultAlumnos = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');