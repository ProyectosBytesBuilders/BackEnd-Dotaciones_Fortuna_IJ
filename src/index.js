//const express = require('express'); //comonJS
import express from 'express'; // ES modul

import pedidosrouter from './routes/pedidos.routes.js';

const app = express();

//Definiendo 1 EndPoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.json({ msg: 'Servidor de Dotaciones Fortuna IJ Funcionando!' });
});

//Enlazar todas las rutas de la aplicacion
app.use( '/api/pedidos', pedidosrouter );

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});