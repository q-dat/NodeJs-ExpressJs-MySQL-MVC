const db = require("../connect/db");

// GET
const getAllProducts = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM products");
    return rows;
  } catch (err) {
    throw err;
  }
};

// GET BY ID
const getProductById = async (id) => {
  try {
    const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [
      id,
    ]);
    return rows[0];
  } catch (err) {
    throw err;
  }
};

// CREATE
const createProduct = async (product) => {
  if (!product.name || !product.img || !product.price) {
    throw new Error(`Các trường là bắt buộc!`);
  }
  const { name, img, price } = product;
  try {
    const [result] = await db.execute(
      "INSERT INTO products (name, img, price) VALUES (?, ?, ?)",
      [name, img, price]
    );
    return { id: result.insertId, name, img, price };
  } catch (err) {
    throw err;
  }
};

// UPDATE
const updateProduct = async (id, product) => {
  const { name, img, price } = product;
  try {
    await db.execute(
      "UPDATE products SET name = ?, img = ? ,price = ? WHERE id = ?",
      [name, img, price, id]
    );
    return { id, name, img, price };
  } catch (err) {
    throw err;
  }
};

// DELETE
const deleteProduct = async (id) => {
  try {
    const [result] = await db.execute("DELETE FROM products WHERE id = ?", [
      id,
    ]);
    return result.affectedRows > 0;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
