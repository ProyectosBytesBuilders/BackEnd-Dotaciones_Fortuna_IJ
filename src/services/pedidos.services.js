// Servicio se habla con la base de datos. Estas funciones realizara las consultas a la base de datos

import PedidoModel from "../models/pedido.model.js";

// TODO: Conectar el Modelo de Pedidos con la base de datos
const dbCreatePedido = async (newPedido) => {

    return await PedidoModel.create(newPedido);

}

const dbGetPedidos = () => {}

const dbUpdatePedidos = () => {}

const dbDeletePedidos = () => {}

export {
    dbCreatePedido,
    dbGetPedidos,
    dbUpdatePedidos,
    dbDeletePedidos
}