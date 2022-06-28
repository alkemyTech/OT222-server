const Model = require("../models/index");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const GenerateToken = require("../util/GenerateToken");
const validateToken = require("../routes/middlewares/validate");

const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const errors = [validationResult(req)];
  const emailError = await Model.User.findAll({
    where: {
      email: email,
    },
  });

  // check if email is already in use
  if (emailError.length !== 0) {
    errors[0].errors.push({
      email: "email is already in use",
    });
  }

  // if there are no errors, save user in database
  if (errors[0].errors.length === 0) {
    const user = await Model.User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    const token = GenerateToken({
      user: user.id,
    });

    res.json({
      auth: "ok",
      token,
    });
  } else {
    return res.status(422).json(errors);
  }
};

const authMe = async (req, res) => {
    const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "No token provided",
    });
  }

  const decoded = validateToken(token);
  const user = await Model.User.findByPk(decoded.user);
  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    emai: user.email,
  });
};

module.exports = { createUser, authMe};
