const express = require('express');
const categoryRouter = express.Router();

const CategoriesController = require('../controllers/categories');

categoryRouter.put('/:id', CategoriesController.editCategoryById);

module.exports = categoryRouter;
