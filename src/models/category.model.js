import { Schema, model } from "mongoose";

//Definir la esstructura de mi documento
const CategorySchema = new Schema(
    //Definir la estructura de datos
    {
        nombre: {
            type: String,
            unique: true,
            minlength: 5,
        },
        descripcion: String,
        status: {
            type: Boolean,
            default: true
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'Pedido',
            required: true
        }
    },
    //Configuraciones de la estructura de datos
    {
        timestamps: true,
        versionKey: false

    }
);

// Definir el model a partir de la estructura del documento
const CategoryModel = model(
    'category', //Nombre de la coleccio donde se guardaran los documentos de tipo Category
    CategorySchema //Esquema que define la estructura de los documentos de tipo Category
);

//Exportar el modelo para que pueda ser utilizado por los servicios
export default CategoryModel;