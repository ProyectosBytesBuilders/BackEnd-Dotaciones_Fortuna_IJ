// mongoose.createConnection('mongodb://127.0.0.1:27017/mongoose_test');

import mongoose from "mongoose";


const URL_REMOTE = 'mongodb+srv://samuelhernandez010608_db_user:Samuelelpro123@mongoatlassamuelhernand.pfsqqhy.mongodb.net/'

const conexion = async () => {
    try {
        await mongoose.connect(URL_REMOTE);
        console.log('Conectado a la base de datos MongoDB');
    } catch (error) {
        console.error( 'Error al conectar a la base de datos:');
    }

}

export default conexion;