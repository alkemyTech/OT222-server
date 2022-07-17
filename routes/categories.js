const express = require("express")
const categoriesRouter = express.Router()

const {
  createCategory,
  getCategories,
  getCategoriesById,
  editCategoryById,
} = require("../controllers/categories")

categoriesRouter.post("/", createCategory)
categoriesRouter.get("/", getCategories)
categoriesRouter.get("/:id", getCategoriesById)
categoriesRouter.put("/:id", editCategoryById)

module.exports = categoriesRouter
