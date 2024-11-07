const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController.js");


// productRoutes.get('/products', productController.getAllProducts);
productRoutes
  .route("/products")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

productRoutes
  .route("/products/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = productRoutes;
