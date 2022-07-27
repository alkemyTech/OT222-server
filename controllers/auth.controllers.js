const { User } = require("../models/index");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const GenerateToken = require("../util/GenerateToken");
const validateToken = require("../routes/middlewares/validate");

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const errors = [validationResult(req)];

    if (errors[0].errors.length) return res.status(422).json(errors);

    const emailError = await User.findAll({
      where: {
        email,
      }
    })

    // check if email is already in use
    if (emailError.length) {
      errors[0].errors.push({
        msg: "Email is already in use",
        para: "email",
        location: "body"
      });
    }

    // if there are no errors, save user in database
    if (errors[0].errors.length === 0) {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: bcrypt.hashSync(password, 10),
      });

      const token = GenerateToken({
        userId: user.id,
      });

      res.json({
        auth: "ok",
        token,
      });
    } else {
      return res.status(422).json(errors);
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ ok: false });
  }
};

const authMe = async (req, res) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        auth: false,
        message: "No token provided",
      });
    }

    const decoded = validateToken(token);
    if (!decoded) return res.status(401).json({ msg: "Invalid token" })

    const { id, firstName, lastName, email, image, roleId } = await User.findByPk(decoded.userId);
    res.json({
      id,
      firstName,
      lastName,
      email,
      image,
      roleId
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ ok: false });
  }
};

const logIn = (req, res) => {
  if (!validationResult(req).isEmpty()) return res.status(401).json({ ok: false, errors: validationResult(req).array() });

  const { email, password } = req.body;

  User.findOne({
    attributes: ["id", "email", "password"],
    where: { email }
  }).then(user => {
    if (!user) return res.status(401).json({ ok: false });
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ ok: false });
    return res.json({ ok: true, user: GenerateToken({ userId: user.id }) });
  })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ ok: false });
    })
}

const editUser = async (req, res) => {

  const { userId } = req.params;
  const { firstName, lastName } = req.body;

  User.update({ firstName, lastName }, { where: { id: userId } })
    .then(n => {
      if (n > 0) {
        res.send({ message: 'User updated' });
      } else {
        res.status(400).send({ message: 'User not found' });
      }
    })
    .catch(err => res.status(500).send(err));

}

module.exports = { createUser, authMe, logIn, editUser };
