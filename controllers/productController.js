const productModel = require('../models/productModel');

// GET
exports.getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi tạo sản phẩm!' });
  }
};

// GET BY ID
exports.getProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productModel.getProductById(productId);
    if (!product) {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm này!' });
    } else {
      res.json(product);
    }
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy sản phẩm theo ID!' });
  }
};

// POST 
exports.createProduct = async (req, res) => {
  const newProduct = req.body;
  try {
    const createdProduct = await productModel.createProduct(newProduct);
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi tạo sản phẩm!' });
  }
};

// PUT
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  try {
    const result = await productModel.updateProduct(productId, updatedProduct);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi sửa sản phẩm!' });
  }
};

// DELETE
exports.deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const success = await productModel.deleteProduct(productId);
    if (!success) {
      res.status(404).json({ message: 'Không tìm thấy sản phẩm này!' });
    } else {
      res.status(204).send();
    }
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi xoá sản phẩm' });
  }
};
