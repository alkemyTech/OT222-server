const { Categories } = require("../models")

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body
    // validate that name exists
    if (!name || !description)
      return res.status(400).json({
        message: "Name is required and description are required",
      })
    // validate name and description string
    if (typeof name !== "string" || typeof description !== "string")
      return res.status(400).json({
        message: "Name and description must be string",
      })
    const category = await Categories.create({
      name: name,
      description: description,
    })
    res.status(201).json({
      category,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll()
    const categoriesName = categories.map(({ id, name }) => {
      return { _id: id, name }
    })
    res.status(200).json({
      categoriesName,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getCategoriesById = async (req, res) => {
  try {
    const category = await Categories.findOne({ where: { id: req.params.id } })
    if (!category)
      return res.status(404).json({ message: "Category not found" })
    res.status(200).json({
      category,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const editCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const { name, description } = req.body
    const category = await Categories.findOne({ where: { id: id } })
    if (!category)
      return res.status(404).json({ message: "Category not found" })
    const categoryUpdated = await category.update(
      {
        name: name,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    )
    res.status(200).json({
      categoryUpdated,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteCategoryById = async (req, res) => {
  try {
    const { id } = req.params
    const category = await Categories.findOne({ where: { id: id } })
    if (!category)
      return res.status(404).json({ message: "Category not found" })
    const categoryDeleted = await category.destroy()
    res.status(200).json({
      categoryDeleted,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createCategory,
  getCategories,
  getCategoriesById,
  editCategoryById,
  deleteCategoryById,
}
