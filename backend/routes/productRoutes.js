import express from "express";
const router = express.Router();
import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  // getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById).put(protect, admin, updateProduct);
// router.get("/top", getTopProducts);
// router.post('/product', createProduct);

export default router;
