const Model = require("../models/index");
const { validationResult } = require("express-validator");

const createNew = async (req, res) => {
  const { name, content, image, categoryId } = req.body;
  const errors = [validationResult(req)];

  try {
    if (errors[0].errors.length === 0) {
      const res = await Model.Entries.create({
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

module.exports = { createNew, getNewById };
