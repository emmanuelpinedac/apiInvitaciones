import { Router } from "express";
import {
  crearEntrada,
  getEntradas,
  getEntradaById,
  actualizarEntrada,
  borrarEntradaById,
  defaultEntradas
} from "../controllers/entradas.controller.js";

const router = Router();

// 

//C
router.post("/entradas/crearEntrada", crearEntrada);

//R - ejemplo simple
router.get("/entradas/getEntradas", getEntradas);

//R - ejemplo con parametro
router.get("/entradas/getEntradaById/:id", getEntradaById);

//U  -  Update
router.put("/entradas/actualizarEntrada/:id", actualizarEntrada);

//D
router.delete("/Entradas/borrarEntradaById/:id", borrarEntradaById);


//Ruta en caso de digitar una erronea
router.get("/entradas/*", defaultEntradas);

export default router;
