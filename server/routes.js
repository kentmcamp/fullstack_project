const express = require("express");
const EntryController = require("./controllers/EntryController");
const CategoryController = require("./controllers/CategoryController");
const ProductController = require("./controllers/ProductController");

const router = express.Router();

// // Product Routes
// router.get("/products", ProductController.index);
// router.post("/products", ProductController.store);
// router.patch("/products/:product", ProductController.update);
// router.delete("/products/:product", ProductController.destroy);

// Web Routes
router.get("/entries", EntryController.index);
router.post("/entries", EntryController.store);
router.patch("/entries/:entry", EntryController.update);
router.delete("/entries/:entry", EntryController.destroy);

// routes.js
router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);
router.patch("/categories/:category", CategoryController.update);
router.delete("/categories/:category", CategoryController.destroy);

module.exports = router;
