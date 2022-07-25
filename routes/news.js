const express = require('express');
const router = express.Router();
const newValidationSchema = require('../validations/newValidationSchema');
const AdminAuth = require('./middlewares/AdminAuth');
const {
  createNew,
  getNewById,
  updateNew,
  getAll,
  deleteNew,
} = require('../controllers/news.controllers');

router.get('/', getAll);

router.get('/:id', getNewById);

router.post('/', AdminAuth, createNew);

router.put('/:id', AdminAuth, updateNew);

router.delete('/:id', AdminAuth, deleteNew);

module.exports = router;
