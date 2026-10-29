import { dbCreatePedido } from "../services/pedidos.services.js";

// Controlador de fine quien hace una accion especifica

const createPedido = async (req, res) => {

    try {
    // Obtenemos el pedido del body de la request
    const Pedido = req.body;

    const newPedido = await dbCreatePedido(Pedido);

    res.json({ msg: 'Registra pedido', pedido: newPedido });
        }
        catch (error) {
            console.error(error);
            res.json({ msg: 'Error al registrar pedido' });
    }

}

const obtainPedidos = (req, res) => {
    res.json({ msg: 'Obtiene todos los pedido' });
}

const updatefullPedido = (req, res) => {
    res.json({ msg: 'Actualizar todos las propiedades de un pedido' });
}

const updatePedido = (req, res) => {
    res.json({ msg: 'Actualizar una o mas propiedades de un pedido' });
}

const deletePedido = (req, res) => {
    res.json({ msg: 'Elimina un pedido' });
}

export {
     createPedido, updatefullPedido, updatePedido, deletePedido, obtainPedidos
}