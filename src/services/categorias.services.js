import { trusted } from 'mongoose';
import CategoryModel from '../models/category.model.js';

const dbCreateCategory = async (newCategory) => {
    return await CategoryModel.create(newCategory); // Registra la nueva categoría en la base de datos
}

const dbGetCategorias = async () => {
    return await CategoryModel.find({status: true}); // Consulta todas las categorías en la base de datos
}

export  {
    dbCreateCategory,
    dbGetCategorias
}