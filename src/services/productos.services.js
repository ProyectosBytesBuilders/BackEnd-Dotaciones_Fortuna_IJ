import ProductModel from "../models/producto.model.js"

const dbCreateProduct = async( newProduct ) => {
    return await ProductModel.create( newProduct );
}



const dbGetProducts = async (status) => {
    const availableStatus = [
        'disponible',
        'en garantia',
        'entregado',
        'en transito'
    ];

    let filter = {};

    if (status && availableStatus.includes(status)) {
        filter.status = status;
    }

    return await ProductModel.find(filter);
}



const dbDeleteProduct = async ( id ) => {
    return await ProductModel.findOneAndDelete({ _id: id });
}

const dbUpdateProduct = async ( id, productUpdate ) => {
    return await ProductModel.findOneAndUpdate(
        { _id: id },
        productUpdate,
        { new: true }
    );
}

const dbGetProduct = async ( id ) => {
    return await ProductModel.findOne({ _id: id });
}

export {
    dbCreateProduct, dbGetProducts, dbDeleteProduct, dbUpdateProduct, dbGetProduct
}