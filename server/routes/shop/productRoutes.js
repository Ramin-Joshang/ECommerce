const express = require('express');
const { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } = require('../../controllers/shop/productController');

const router = express.Router();

router
    .route("/products")
    .get(getAllProducts)
    .post(createProduct)

router
    .route("/product/:id")
    .get(getProductById)
    .patch(updateProduct)
    .delete(deleteProduct)

module.exports = router;