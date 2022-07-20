const express = require("express")
const categoriesRouter = express.Router()

const {
  createCategory,
  getCategories,
  getCategoriesById,
  editCategoryById,
  deleteCategoryById,
} = require("../controllers/categories")

categoriesRouter.post("/", createCategory)
categoriesRouter.get("/", getCategories)
categoriesRouter.get("/:id", getCategoriesById)
categoriesRouter.put("/:id", editCategoryById)
categoriesRouter.delete("/:id", deleteCategoryById)

module.exports = categoriesRouter
