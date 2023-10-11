import express from "express";
const router = express.Router();
import {
createProduct,
getProductById,
getProducts,
updateProduct,
getTopProducts,
getProductsByCategory,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";


router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/top").get(getTopProducts);
router.route("/category/:id").get(getProductsByCategory);
router.route("/:id").get(getProductById).put(updateProduct);
export default router;