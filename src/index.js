//const express = require('express'); //comonJS
import express from 'express'; // ES modul

const app = express();

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});