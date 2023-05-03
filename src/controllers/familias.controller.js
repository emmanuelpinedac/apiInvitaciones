

import { getConnection, querysFamilias, sql } from "../models/index.js";

//Función para crear registro de un nuevo Familia
export const crearFamilia = async (req, res) => {
  let { nombre_familia } = req.body;

  // validacion
  if (nombre_familia == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre_familia", sql.VarChar, nombre_familia)
      .query(querysFamilias.crearFamilia);

    res.json({nombre_familia});
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos Familias
export const getFamilias = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
  .request()
  .query(querysFamilias.getFamilias);
  res.json(result.recordset);

} catch (error) {11111
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un Familia escogiendo el id
export const getFamiliaById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    // El segundo id viene de la ruta, se debe respetar
    .query(querysFamilias.getFamiliaById);

  return res.json(result.recordset[0]); 
  //el cero es solo para que traiga el primer registro
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un Familia
export const actualizarFamilia = async (req, res) => { 
const { nombre_familia } = req.body;

// validacion

if (nombre_familia == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido" });
}

try {
  const pool = await getConnection();
  await pool
    .request()
    .input("nombre_familia", sql.VarChar, nombre_familia)
    .input("id", req.params.id)
    .query(querysFamilias.actualizarFamilia);
  res.json({nombre_familia});
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un Familia escogiendo el id
export const borrarFamiliaById = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querysFamilias.borrarFamiliaById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

export const defaultFamilias = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');