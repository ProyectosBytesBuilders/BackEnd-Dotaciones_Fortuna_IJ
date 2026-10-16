import { dbCreateCategory, dbGetCategorias } from "../services/categorias.services.js";

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

const getCategorias = async ( req, res) => {
    const data = await dbGetCategorias();

    res.json({
        msg: 'Lista de Categorias',
        data: data
    });

}

export {
    createCategory,
    getCategorias
}