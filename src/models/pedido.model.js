
import { Schema, model } from "mongoose";

// Parte 1: Definir estructura de datos del documento
const PedidoSchema = new Schema({
    fecha: {
        type: Date,
        default: Date.now
    },

    estado: {
        type: String,
        required: true,
        trim: true,
        enum: ["Pendiente", "En proceso", "Entregado", "Cancelado"],
        default: "Pendiente"
    },

    total: {
        type: Number,
        required: true,
        min: 0
    },

    observaciones: {
        type: String,
        trim: true,
        default: ""
    },

    metodo_pago: {
        type: String,
        trim: true,
        default: "Pendiente"
    },

    direccion_entrega: {
        type: String,
        required: true,
        trim: true
    },

    telefono_contacto: {
        type: String,
        trim: true
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'Pedido',
        default: null
    }
}, 

{
    timestamps: true
});

// Parte 2: Definir el modelo
const PedidoModel = model(
    'Pedido',                           // Nombre de la colección en la base de datos
    PedidoSchema                        // Esquema que define la estructura de los documentos
);

export default PedidoModel;
