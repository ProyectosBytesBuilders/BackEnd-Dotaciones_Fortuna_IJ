//const express = require('express'); //comonJS
import express from 'express'; // ES modul

const app = express();

app.get('/health', (req, res) => {
    res.json({ msg: 'Servidor de Dotaciones Fortuna IJ Funcionando!' });
});

//Obtener Todos Los Pedidos
app.get('/pedidos', (req, res) => {
    res.json({ msg: 'Lista todos los pedidos' });
});

//Crear Un Pedido
app.post('/pedidos', (req, res) => {
    res.json({msg: 'Registra pedido' });
});

//Actualizar Totalmente
app.put('/pedidos', (req, res) => {
    res.json({ msg: 'Actualizar todos las propiedades de un pedido'});
});

//Actualizar Parcialmente
app.patch('/pedidos', (req, res) => {
    res.json({ msg: 'Actualizar una o mas propiedades de un pedido'});
});

//Eliminar un usuario
app.delete('/pedidos', (req, res) => {
    res.json({ msg: 'Elimina un usuario'});
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});