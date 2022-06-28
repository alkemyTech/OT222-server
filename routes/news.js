const express = require("express");
const router = express.Router();
const newValidationSchema = require("../validations/newValidationSchema");
const { createNew, getNewById } = require("../controllers/news.controllers");

router.post("/", [newValidationSchema], createNew);

router.get("/:id", getNewById)

module.exports = router;
