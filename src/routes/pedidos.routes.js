import { Router } from 'express';

const router = Router();

// Definicion de las rutas para pedidos

router.get('/', (req, res ) => {
    res.json({ msg: 'Obtiene todos los pedidos'});

});
router.post('/', (req, res ) => {
    res.json({ msg: 'Registra los pedidos'});

});
router.put('/', (req, res ) => {
    res.json({ msg: 'Actualizar todos las propiedades de un pedido'});

});
router.patch('/', (req, res ) => {
    res.json({ msg: 'Actualizar una o mas propiedades de un pedido'});

});
router.delete('/', (req, res ) => {
    res.json({ msg: 'Elimina un pedido'});

});


export default router;