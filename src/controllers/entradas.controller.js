import { getConnection, querysEntradas, sql } from "../models/index.js";

//Función para crear registro de un nuevo Entrada
export const crearEntrada = async (req, res) => {
  let { nombre_entrada } = req.body;
  let { detalle_entrada } = req.body;

  // validacion
  if (nombre_entrada == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
  }
  else if (detalle_entrada == null) {
      return res.status(400).json({ msg: "Por favor llene el campo detalle entrada" });
    }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre_Entrada", sql.VarChar, nombre_entrada)
      .input("detalle_entrada", sql.VarChar, detalle_entrada)
      .query(querysEntradas.crearEntrada);

    res.json({ nombre_entrada, detalle_entrada });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos Entradas
export const getEntradas = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
  .request()
  .query(querysEntradas.getEntradas);
  res.json(result.recordset);

} catch (error) {11111
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un Entrada escogiendo el id
export const getEntradaById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    // El segundo id viene de la ruta, se debe respetar
    .query(querysEntradas.getEntradaById);

  return res.json(result.recordset[0]); 
  //el cero es solo para que traiga el primer registro
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un Entrada
export const actualizarEntrada = async (req, res) => { 
const { nombre_entrada } = req.body;
const { detalle_entrada } = req.body;

// validacion

if (nombre_entrada == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre es requerido" });
}

if (detalle_entrada == null) {
  return res.status(400).json({ msg: "Por favor llene el campo de la familia" });
}

try {
  const pool = await getConnection();
  await pool
    .request()
    .input("nombre_entrada", sql.VarChar, nombre_entrada)
    .input("detalle_entrada", sql.VarChar, detalle_entrada)
    .input("id", req.params.id)
    .query(querysEntradas.actualizarEntrada);
  res.json({ detalle_entrada, nombre_entrada });
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un Entrada escogiendo el id
export const borrarEntradaById = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querysEntradas.borrarEntradaById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultEntradas = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');