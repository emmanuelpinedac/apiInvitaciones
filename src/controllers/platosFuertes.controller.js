import { getConnection, querysPlatosFuertes, sql } from "../models/index.js";

//Función para crear registro de un nuevo PlatoFuerte
export const crearPlatoFuerte = async (req, res) => {
  let { nombre_PlatoFuerte } = req.body;
  let { detalle_PlatoFuerte } = req.body;

  // validacion
  if (nombre_PlatoFuerte == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
  }
  else if (detalle_PlatoFuerte == null) {
      return res.status(400).json({ msg: "Por favor llene el campo detalle PlatoFuerte" });
    }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre_PlatoFuerte", sql.VarChar, nombre_PlatoFuerte)
      .input("detalle_PlatoFuerte", sql.VarChar, detalle_PlatoFuerte)
      .query(querysPlatosFuertes.crearPlatoFuerte);

    res.json({ nombre_PlatoFuerte, detalle_PlatoFuerte });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos PlatoFuertes
export const getPlatosFuertes = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
  .request()
  .query(querysPlatosFuertes.getPlatosFuertes);
  res.json(result.recordset);

} catch (error) {11111
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un PlatoFuerte escogiendo el id
export const getPlatoFuerteById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    // El segundo id viene de la ruta, se debe respetar
    .query(querysPlatosFuertes.getPlatoFuerteById);

  return res.json(result.recordset[0]); 
  //el cero es solo para que traiga el primer registro
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un PlatoFuerte
export const actualizarPlatoFuerte = async (req, res) => { 
const { nombre_PlatoFuerte } = req.body;
const { detalle_PlatoFuerte } = req.body;

// validacion

if (nombre_PlatoFuerte == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre es requerido" });
}

if (detalle_PlatoFuerte == null) {
  return res.status(400).json({ msg: "Por favor llene el campo de la PlatoFuerte" });
}

try {
  const pool = await getConnection();
  await pool
    .request()
    .input("nombre_PlatoFuerte", sql.VarChar, nombre_PlatoFuerte)
    .input("detalle_PlatoFuerte", sql.VarChar, detalle_PlatoFuerte)
    .input("id", req.params.id)
    .query(querysPlatosFuertes.actualizarPlatoFuerte);
  res.json({ detalle_PlatoFuerte, nombre_PlatoFuerte });
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un PlatoFuerte escogiendo el id
export const borrarPlatoFuerteById = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querysPlatosFuertes.borrarPlatoFuerteById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultPlatoFuerte = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');