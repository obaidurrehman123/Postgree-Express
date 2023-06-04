const pool = require("../db");
const {
  getproducts,
  getProductId,
  checkEmailExists,
  addingProduct,
} = require("../Queries/queires");
const getAllProducts = async (req, res) => {
  try {
    const results = await pool.query(getproducts);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).send({
      error,
      success: false,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query(getProductId, [id]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).send({
      error: error.message,
      success: false,
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const { name, email, password, city } = req.body;
    if (!name) {
      return res.status(400).send("Name cannot be empty");
    }
    if (!email) {
      return res.status(400).send("Email cannot be empty");
    }
    if (!password) {
      return res.status(400).send("Password cannot be empty");
    }
    if (!city) {
      return res.status(400).send("City cannot be empty");
    }
    const existingEmail = await pool.query(checkEmailExists, [email]);
    if (existingEmail.rows.length > 0) {
      return res.status(400).send("Email already exists");
    }
    const results = await pool.query(addingProduct, [
      name,
      email,
      password,
      city,
    ]);
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).send({
      error: error.message,
      success: false,
    });
  }
};

module.exports = { getAllProducts, getProductById, addProduct };
