import { dbCreateCategory, dbDeleteCategory, dbGetCategorias, dbGetCategory, dbUpdateCategory } from "../services/categorias.services.js";

const createCategory = async ( req, res ) => {

    try {
    // Extrae los datos del cuerpo de la peticion
    const inputData = req.body;

    // Usar el servicio para registrar 
    const data = await dbCreateCategory( inputData );

    res.json({ msg: 'Registra categoria', data: data });

    } 
    catch (error) {
    console.error(error);
    res.json({ msg: 'Error al registrar categoria'});
    }

}

const getCategorias = async ( req, res ) => {
    const data = await dbGetCategorias();

    res.json({
        msg: 'Lista de Categorias',
        data: data
    });

}

const deleteCategory = async ( req, res ) => {

    try {

    const id = req.params.id;

    const data = await dbDeleteCategory(id);

    res.json({ 
        msg: 'Elimina una categoria',
        data: data
     });
}
catch (error){
    console.error(error);
    res.json({ msg: 'Error al eliminar categoria'});
}

}

const updateCategory = async ( req, res ) => {

    try {
            const id = req.params.id;
    const inputdata = req.body;

    const data = await dbUpdateCategory( id, inputdata );


    res.json({ 
        msg: 'Categoria Actualizada',
        data: data

     });
    } 
    catch (error) {
        console.error(error);
        res.json({
            msg: 'Error al actualizar la categoria '
        })
    }
}


const getCategory = async (req, res) => {


    try {
        const id = re1.params.id;

       const data = await dbGetCategory(id);

       res.json({
        msg: 'Obtiene una categoria',
        data: data  
       })
    } catch (error) {

    console.error( error );

    res.json({
        msg: 'No se pudo obtener categoria por ID'
    });
        
    }
}
export {
    createCategory,
    getCategorias,
    deleteCategory,
    updateCategory,
    getCategory
}