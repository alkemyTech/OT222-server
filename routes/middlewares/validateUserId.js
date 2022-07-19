const { User } = require('../../models');

const ValidateUserId = async (req, res, next) => {
  try {
    const user = await User.findAll({
      where: { id: Number(req.params.userId) },
    });
    if (user.length > 0) {
      next();
    } else {
      return res.send('El usario no existe!!');
    }
  } catch (e) {
    return res.send(e);
  }
};

module.exports = ValidateUserId;
