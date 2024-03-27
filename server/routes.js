const express = require("express");
const EntryController = require("./controllers/EntryController");
const CategoryController = require("./controllers/CategoryController");

const router = express.Router();

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
