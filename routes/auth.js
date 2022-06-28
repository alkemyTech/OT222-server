const router = require("express").Router();
const { User } = require("../models/index");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const { createUser, authMe } = require("../controllers/auth.controllers");
const userValidationSchema = require("../validations/userValidationSchema");

// auth me
router.get("/me", authMe);

// Create a new user
router.post("/register", userValidationSchema, createUser);

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

module.exports = router;