const express = require("express");
const router = express.Router();
const newValidationSchema = require("../validations/newValidationSchema");
const { createNew, getNewById } = require("../controllers/news.controllers");

const express = require("express");
const { Entries } = require("../models/index");

router.get("/", (req, res) => {
  Entries.findAll({
    where: { type: "news" },
    attributes: ["name", "image", "createdAt"],
  })
    .then((entries) => res.send(entries))
    .catch((err) => res.send(err));
});

router.get("/:id", getNewById);

module.exports = router;
