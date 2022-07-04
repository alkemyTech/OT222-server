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
        message: 'new created sucessfull'
    });
  } catch (error) {
    console.log(error);
    res.json({
      error: errors,
      message: "catch",
    });
  }
};

module.exports = { createNew };
