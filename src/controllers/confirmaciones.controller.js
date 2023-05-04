import { getConnection, querysConfirmaciones, sql } from "../models/index.js";

//Función para crear registro de un nuevo Confirmacion
export const crearConfirmacion = async (req, res) => {
  let { fecha_confirmacion } = req.body;
  let { id_invitado } = req.body;
  let { id_entrada } = req.body;
  let { id_PlatoFuerte } = req.body;
  let { asistencia } = req.body;
  let { mensaje } = req.body;


  // validacion
  if (fecha_confirmacion == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
  }
  else if (id_invitado == null) {
      return res.status(400).json({ msg: "Por favor llene el id de familia" });
    }
  else if (id_entrada  == null) {
    return res.status(400).json({ msg: "Por favor llene el id de familia" });
  }
  else if (id_PlatoFuerte == null) {
    return res.status(400).json({ msg: "Por favor llene el id de familia" });
  }
  else if (asistencia== null) {
    return res.status(400).json({ msg: "Por favor llene el id de familia" });
  }
  else if (mensaje == null) {
    return res.status(400).json({ msg: "Por favor llene el id de familia" });
  }

  try {
    const pool = await getConnection();

    await pool
      .request()
      // .input("fecha_confirmacion", sql.DateTime, fecha_confirmacion)
      .input("id_invitado", sql.Int, id_invitado)
      .input("id_entrada", sql.Int, id_entrada)
      .input("id_PlatoFuerte", sql.Int, id_PlatoFuerte)
      .input("asistencia", sql.Bit, asistencia)
      .input("mensaje", sql.NVarChar, mensaje)

      .query(querysConfirmaciones.crearConfirmacion);

    res.json({ fecha_confirmacion, id_invitado, id_entrada, id_PlatoFuerte, asistencia, mensaje });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos Confirmacions
export const getConfirmaciones = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
  .request()
  .query(querysConfirmaciones.getConfirmaciones);
  res.json(result.recordset);

} catch (error) {11111
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un Confirmacion escogiendo el id
export const getConfirmacionById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    // El segundo id viene de la ruta, se debe respetar
    .query(querysConfirmaciones.getConfirmacionById);

  return res.json(result.recordset[0]); 
  //el cero es solo para que traiga el primer registro
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un Confirmacion
export const actualizarConfirmacion = async (req, res) => { 

const { fecha_confirmacion } = req.body;
const { id_invitado } = req.body;
const { id_entrada } = req.body;
const { id_PlatoFuerte } = req.body;
const { asistencia } = req.body;
const { mensaje } = req.body;

// validacion

if (fecha_confirmacion == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
}
else if (id_invitado == null) {
    return res.status(400).json({ msg: "Por favor llene el id de familia" });
  }
else if (id_entrada  == null) {
  return res.status(400).json({ msg: "Por favor llene el id de familia" });
}
else if (id_PlatoFuerte == null) {
  return res.status(400).json({ msg: "Por favor llene el id de familia" });
}
else if (asistencia== null) {
  return res.status(400).json({ msg: "Por favor llene el id de familia" });
}
else if (mensaje == null) {
  return res.status(400).json({ msg: "Por favor llene el id de familia" });
}
try {
  const pool = await getConnection();
  await pool
    .request()
    .input("fecha_confirmacion", sql.DateTime, fecha_confirmacion)
    .input("id_invitado", sql.Int, id_invitado)
    .input("id_entrada", sql.Int, id_entrada)
    .input("id_PlatoFuerte", sql.Int, id_PlatoFuerte)
    .input("asistencia", sql.Bit, asistencia)
    .input("mensaje", sql.NVarChar, mensaje)

    .input("id", req.params.id)
    .query(querysConfirmaciones.actualizarConfirmacion);
  res.json({ id_invitado, fecha_confirmacion });
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un Confirmacion escogiendo el id
export const borrarConfirmacionById = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querysConfirmaciones.borrarConfirmacionById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultConfirmacion = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');