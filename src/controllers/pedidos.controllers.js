const createPedido = (req, res) => {
    res.json({ msg: 'Registra pedido' });
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