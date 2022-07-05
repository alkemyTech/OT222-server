const express = require("express");
const router = express.Router();
const newValidationSchema = require("../validations/newValidationSchema");
const {
  createNew,
  getNewById,
  updateNew,
} = require("../controllers/news.controllers");


router.get("/", (req, res) => {
  Entries.findAll({
    where: { type: "news" },
    attributes: ["name", "image", "createdAt"],
  })
    .then((entries) => res.send(entries))
    .catch((err) => res.send(err));
});

router.get("/:id", getNewById);

router.put("/:id", updateNew);
module.exports = router;
