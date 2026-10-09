import { Router } from 'express';
import { createPedido, deletePedido, obtainPedidos, updatefullPedido, updatePedido } from '../controllers/pedidos.controllers.js';

const router = Router();

// Definicion de las rutas para pedidos

router.get('/', obtainPedidos );

router.post('/', createPedido );

router.put('/', updatefullPedido );

router.patch('/', updatePedido );

router.delete('/', deletePedido );

export default router;