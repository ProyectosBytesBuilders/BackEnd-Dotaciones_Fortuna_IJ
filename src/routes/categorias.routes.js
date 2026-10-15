import { Router } from "express";
import { createCategory } from "../controllers/categorias.controllers.js";

// Crea una instancia de las rutas de Express
const router = Router();


//Defini las rutas para las categorias
router.post( '/', createCategory);

// Exportar las rutas definidas en este archivo
export default router;