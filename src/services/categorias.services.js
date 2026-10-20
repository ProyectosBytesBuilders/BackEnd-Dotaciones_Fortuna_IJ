import CategoryModel from '../models/category.model.js';

const dbCreateCategory = async (newCategory) => {
    return await CategoryModel.create(newCategory); // Registra la nueva categoría en la base de datos
}

const dbGetCategorias = async () => {
    return await CategoryModel.find({status: true}); // Consulta todas las categorías en la base de datos
}

const dbDeleteCategory = async ( id ) => {
    return await CategoryModel.findByIdAndDelete( {_id: id} );
}

const dbUpdateCategory = async (id, categoryUpdated) => {



    return await CategoryModel.findOneAndUpdate( 
        {_id: id},  //El ID del documento que deseamos actualizar
        categoryUpdated,
        
        {new: true}
    );
}

const dbGetCategory = async () => {
   //return await CategoryModel.findById( id );
   return await CategoryModel.findOne( {_id: id });
   
}


export  {
    dbCreateCategory,
    dbGetCategorias,
    dbDeleteCategory,
    dbUpdateCategory,
    dbGetCategory
}