//const express = require('express'); //comonJS
import express from 'express'; // ES modul

import conexion from './config/mongo.config.js';
import pedidosrouter from './routes/pedidos.routes.js';
import categoriasRoute from './routes/categorias.routes.js'
import productosRoute from './routes/productos.routes.js'

const port = process.env.PORT  || 3001;

const app = express();

conexion();

app.use(express.json()); //middleware para que el servidor pueda recibir y enviar datos en formato JSON

//Definiendo 1 EndPoint (ruta de entrada)
app.get('/health', (req, res) => {
    res.json({ msg: 'Servidor de Dotaciones Fortuna IJ Funcionando!' });
});

//Enlazar todas las rutas de la aplicacion
app.use( '/api/pedidos', pedidosrouter );
app.use( '/api/categorias', categoriasRoute );
app.use( '/api/productos',productosRoute
    
 );

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});