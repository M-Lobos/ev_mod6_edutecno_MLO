import { Router } from "express";
import {
    crearNuevoAnime,
    getAllMonosChinos,
    buscarMonosChinosPorId,
    buscarMonosChinosPorNombre,
    ActualizacionMonoChino,
    EliminacionPermanenteMonoChino
} from "../controller/anime.controller.js";

const router = Router();

router.post("/monochino", crearNuevoAnime); //  método post monoChino
router.get("/monochino", getAllMonosChinos); // método get getAllMonosChinos
router.get("/monochino/id/:id",buscarMonosChinosPorId); // método get buscarMonochinoPorId
router.get("/monochino/nombre/:nombre",buscarMonosChinosPorNombre); // método get buscarAnimePorNombre
router.put("/monochino/actualizar/:id", ActualizacionMonoChino); // método put actualizar Monos chinos
router.delete("/monochino/delete/:id", EliminacionPermanenteMonoChino); // método delete para eliminar Monos chinos

export default router; 

