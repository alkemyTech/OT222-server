const router = require("express").Router();
const { User } = require("../models/index");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { jwt } = require("jsonwebtoken");
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    if (!validationResult(req).isEmpty())
      return res.status(401).json({ ok: false });

    const { email, password } = req.body;
    User.findOne({
      where: { email },
    }).then((user) => {
      if (!user) return res.status(401).json({ ok: false });
      if (!bcrypt.compareSync(password, user.password))
        return res.status(401).json({ ok: false });
      return res.json({ ok: true, user });
    });
  }
);

const validateToken = require("./middlewares/validate");
router.get("/me", async (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      auth: false,
      message: "No token provided",
    });
  }

  const decoded = validateToken(token);
  const user = await User.findByPk(decoded.user);
  res.json({
    firstName: user.firstName,
    lastName: user.lastName,
    emai: user.email,
  });
});

const { createUser } = require('../controllers/users.controllers');
const userValidationSchema = require('../validations/userValidationSchema')

// login user
router.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  (req, res) => {
    if (!validationResult(req).isEmpty())
      return res.status(401).json({ ok: false });

    const { email, password } = req.body;
    User.findOne({
      where: { email },
    }).then((user) => {
      if (!user) return res.status(401).json({ ok: false });
      if (!bcrypt.compareSync(password, user.password))
        return res.status(401).json({ ok: false });
      return res.json({ ok: true, user });
    });
  }
);



// Create a new user
router.post('/register', userValidationSchema, createUser)
module.exports = router;
