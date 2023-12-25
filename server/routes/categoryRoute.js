const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router
  .route("/categories")
  .post(categoryController.addCategory)
  .get(categoryController.getCategories);

router
  .route("/categories/:id")
  .get(categoryController.getCategoryByID)
  .put(categoryController.updateCategoryByID)
  .delete(categoryController.deleteCategoryByID);

module.exports = router;
