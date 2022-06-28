const express = require("express");
const router = express.Router();
const newValidationSchema = require("../validations/newValidationSchema");
const { createNew } = require("../controllers/news.controllers");

router.post("/", [newValidationSchema], createNew);

module.exports = router;
