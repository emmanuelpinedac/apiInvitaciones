import { Router } from "express";
import {
  crearInvitado,
  getInvitados,
  getInvitadoById,
  actualizarInvitado,
  borrarInvitadoById,
  defaultInvitados
} from "../controllers/invitados.controller.js";

const router = Router();

// 

//C
router.post("/invitados/crearInvitado", crearInvitado);

//R - ejemplo simple
router.get("/invitados/getInvitados", getInvitados);

//R - ejemplo con parametro
router.get("/invitados/getInvitadoById/:id", getInvitadoById);

//U  -  Update
router.put("/invitados/actualizarInvitado/:id", actualizarInvitado);

//D
router.delete("/invitados/borrarInvitadoById/:id", borrarInvitadoById);


//Ruta en caso de digitar una erronea
router.get("/invitados/*", defaultInvitados);

export default router;
