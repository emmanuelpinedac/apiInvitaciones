import { getConnection, querys, sql } from "../models/index.js";

//Función para crear registro de un nuevo invitado
export const crearInvitado = async (req, res) => {
  let { nombre_invitado } = req.body;
  let { id_familia } = req.body;

  // validacion
  if (nombre_invitado == null) {
    return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido nombre" });
  }
  else if (id_familia == null) {
      return res.status(400).json({ msg: "Por favor llene el id de familia" });
    }

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("nombre_invitado", sql.VarChar, nombre_invitado)
      .input("id_familia", sql.Int, id_familia)
      .query(querys.crearInvitado);

    res.json({ nombre_invitado, id_familia });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


//Función para obtener todos los datos de todos Invitados
export const getInvitados = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
  .request()
  .query(querys.getInvitados);
  res.json(result.recordset);

} catch (error) {11111
  res.status(500);
  res.send(error.message);
}
};


//Funcion para obtener los datos de un Invitado escogiendo el id
export const getInvitadoById = async (req, res) => {
try {
  const pool = await getConnection();

  const result = await pool
    .request()
    .input("id", req.params.id)
    // El segundo id viene de la ruta, se debe respetar
    .query(querys.getInvitadoById);

  return res.json(result.recordset[0]); 
  //el cero es solo para que traiga el primer registro
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


//Funcion para actualizar los datos de un Invitado
export const actualizarInvitado = async (req, res) => { 
const { nombre_invitado } = req.body;
const { id_familia } = req.body;

// validacion

if (nombre_invitado == null) {
  return res.status(400).json({ msg: "Por favor llene el campo del nombre requerido" });
}

if (id_familia == null) {
  return res.status(400).json({ msg: "Por favor llene el campo de la familia" });
}

try {
  const pool = await getConnection();
  await pool
    .request()
    .input("nombre_invitado", sql.VarChar, nombre_invitado)
    .input("id_familia", sql.VarChar, id_familia)
    .input("id", req.params.id)
    .query(querys.actualizarInvitado);
  res.json({ id_familia, nombre_invitado });
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};

//Funcion para borrar un Invitado escogiendo el id
export const borrarInvitadoById = async (req, res) => {
try {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", req.params.id)
    .query(querys.borrarInvitadoById);

  if (result.rowsAffected[0] === 0) return res.sendStatus(404);

  return res.sendStatus(204);
} catch (error) {
  res.status(500);
  res.send(error.message);
}
};


export const defaultInvitados = (req, res) => res.send('Error 404 | La ruta que buscas no existe en esta API. Revisa la ruta que estás digitando.');