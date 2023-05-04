import { Router } from "express";
import {
  crearConfirmacion,
  getConfirmaciones,
  getConfirmacionById,
  actualizarConfirmacion,
  borrarConfirmacionById,
  defaultConfirmacion
} from "../controllers/confirmaciones.controller.js";

const router = Router();

// 

//C
router.post("/confirmaciones/crearConfirmacion", crearConfirmacion);

//R - ejemplo simple
router.get("/confirmaciones/getConfirmaciones", getConfirmaciones);

//R - ejemplo con parametro
router.get("/confirmaciones/getConfirmacionById/:id", getConfirmacionById);

//U  -  Update
router.put("/confirmaciones/actualizarConfirmacion/:id", actualizarConfirmacion);

//D
router.delete("/confirmaciones/borrarConfirmacionById/:id", borrarConfirmacionById);


//Ruta en caso de digitar una erronea
router.get("/confirmaciones/*", defaultConfirmacion);

export default router;
