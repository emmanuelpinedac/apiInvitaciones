import { Router } from "express";
import {
  crearFamilia,
  getFamilias,
  getFamiliaById,
  actualizarFamilia,
  borrarFamiliaById,
  defaultFamilias
} from "../controllers/familias.controller.js";

const router = Router();

// 

//C
router.post("/familias/crearFamilia", crearFamilia);

//R - ejemplo simple
router.get("/familias/getFamilias", getFamilias);

//R - ejemplo con parametro
router.get("/familias/getFamiliaById/:id", getFamiliaById);

//U  -  Update
router.put("/familias/actualizarFamilia/:id", actualizarFamilia);

//D
router.delete("/familias/borrarFamiliaById/:id", borrarFamiliaById);


//Ruta en caso de digitar una erronea
router.get("/familias/*", defaultFamilias);

export default router;
