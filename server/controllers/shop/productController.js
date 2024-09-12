const Product = require("../../models/Product");
const { getAll, getOne, createOne, updateOne, deleteOne } = require("../handlerFactory");

exports.getAllProducts = getAll(Product);

exports.getProductById = getOne(Product);

exports.createProduct = createOne(Product);

exports.updateProduct = updateOne(Product);

exports.deleteProduct = deleteOne(Product);
