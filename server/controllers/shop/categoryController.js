const Category = require("../../models/Category");
const { getAll, getOne, createOne, updateOne, deleteOne } = require("../handlerFactory");

exports.getAllCategories = getAll(Category);

exports.getCategoryById = getOne(Category);

exports.createCategory = createOne(Category);

exports.updateCategory = updateOne(Category);

exports.deleteCategory = deleteOne(Category);
