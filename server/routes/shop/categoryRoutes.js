const express = require('express');
const { getAllCategories, createCategory, getCategoryById, updateCategory, deleteCategory } = require('../../controllers/shop/categoryController');

const router = express.Router();

router
    .route("/category")
    .get(getAllCategories)
    .post(createCategory)

router
    .route("/category/:id")
    .get(getCategoryById)
    .patch(updateCategory)
    .delete(deleteCategory)

module.exports = router;