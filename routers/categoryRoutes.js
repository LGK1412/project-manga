const express = require("express");

const categoryController = require("../controllers/categoryController.js");

const router = express.Router();

router.get("/", categoryController.getAllCategory);
router.get("/:categoryId", categoryController.getAllMangaByCategory);
module.exports = router;
