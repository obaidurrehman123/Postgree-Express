const getproducts = "SELECT * FROM products";
const getProductId = "SELECT * FROM products WHERE id = $1";
const checkEmailExists = "SELECT email FROM products where email=$1";
const addingProduct =
  "INSERT INTO products(name,email,password,city) VALUES ($1,$2,$3,$4)";
module.exports = { getproducts, getProductId, checkEmailExists, addingProduct };
