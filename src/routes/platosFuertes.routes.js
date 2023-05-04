import { Router } from "express";
import {
  crearPlatoFuerte,
  getPlatosFuertes,
  getPlatoFuerteById,
  actualizarPlatoFuerte,
  borrarPlatoFuerteById,
  defaultPlatoFuerte
} from "../controllers/platosFuertes.controller.js";

const router = Router();

// 

//C
router.post("/platoFuerte/crearPlatoFuerte", crearPlatoFuerte);

//R - ejemplo simple
router.get("/platoFuerte/getPlatosFuertes", getPlatosFuertes);

//R - ejemplo con parametro
router.get("/platoFuerte/getPlatoFuerteById/:id", getPlatoFuerteById);

//U  -  Update
router.put("/platoFuerte/actualizarPlatoFuerte/:id", actualizarPlatoFuerte);

//D
router.delete("/platoFuerte/borrarPlatoFuerteById/:id", borrarPlatoFuerteById);


//Ruta en caso de digitar una erronea
router.get("/platoFuerte/*", defaultPlatoFuerte);

export default router;
