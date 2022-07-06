const Model = require("../models/index");
const { validationResult } = require("express-validator");

const createNew = async (req, res) => {
  const { name, content, image, categoryId } = req.body;
  const errors = [validationResult(req)];

  try {
    if (errors[0].errors.length === 0) {
      await Model.Entries.create({
        name,
        content,
        image,
        categoryId,
        type: "news",
      });
    }
    res.json({
      message: "new created sucessfull",
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: errors,
      message: "catch",
    });
  }
};

const getNewById = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await Model.Entries.findByPk(id);
    if (news === null) {
      res.json({
        message: "Not Found!.",
      });
    } else {
      res.json(news);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateNew = async (req, res) => {
  const { id } = req.params;
  const { name, content, image, categoryId } = req.body;

  try {
    const news = await Model.Entries.findByPk(id);
    if (news) {
      (news.name = name),
        (news.content = content),
        (news.image = image),
        (news.categoryId = categoryId);

      await news.save();

      res.json({ message: "new updates sucessfull" });
    } else {
      res.json({ message: "Not Found!" });
    }
  } catch (error) {
    res.json(error);
  }
};

const getAll = (req, res) => {
  Model.Entries.findAll({
    where: { type: "news" },
    attributes: ["id", "name", "image", "createdAt"],
  })
    .then((entries) => res.send(entries))
    .catch((err) => res.send(err));
}

const deleteNew = (req, res) => {
  const { id } = req.params;
  Model.Entries.destroy({
    where: { id },
  })
    .then((news) => res.send({ message: "new deleted sucessfull" }))
    .catch(err => res.send(err))
}

module.exports = { createNew, getNewById, updateNew, deleteNew, getAll };
