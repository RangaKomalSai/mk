import express from "express";
import { getProducts, getProductsbyId } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/:category", getProducts);
router.get("/byId/:id", getProductsbyId);


export default router;
