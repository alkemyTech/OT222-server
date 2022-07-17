var express = require("express");
var router = express.Router();
const Model = require("../models/index");

router.post("/", async (req, res) => {
  const { name, content, image } = req.body;
  await Model.activities
    .create({
      name,
      content,
      image,
    })
    .then((activities) => res.send(activities))
    .catch((err) => res.status(400).send(err));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, content, image } = req.body;

  const activity = await Model.activities.findOne({ where: { id: id } });

  if (activity === null) {
    res.json({ message: "Activity not found" });
  }

  try {
    const item = await Model.activities.update(
      {
        name,
        content,
        image,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.json({
      name,
      content,
      image,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  const activities = await Model.activities.findAll();
  res.json(activities);
});

module.exports = router;
