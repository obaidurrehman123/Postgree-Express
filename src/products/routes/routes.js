const { Router } = require("express");
const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controller/controller");
const router = Router();

// router.get()
router.get("/getproducts", getAllProducts);
router.get("/getProductById/:id", getProductById);
router.post("/addProduct", addProduct);
module.exports = router;
