import { Router } from "express";
import { createCategory, deleteCategory, getCategorias, getCategory, updateCategory } from "../controllers/categorias.controllers.js";

// Crea una instancia de las rutas de Express
const router = Router();


//Defini las rutas para las categorias
router.post( '/', createCategory);
router.get( '/', getCategorias);
router.delete( '/:id', deleteCategory);
router.patch( '/:id', updateCategory);
router.get( '/:id', getCategory)

// Exportar las rutas definidas en este archivo
export default router;