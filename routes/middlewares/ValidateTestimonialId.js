const { Testimonials } = require('../../models');

const ValidateTestimonialId = async (req, res, next) => {
  idTestimony = req.params.id;
  try {
    const testimonial = await Testimonials.findAll({
      where: { id: idTestimony },
    });

    if (testimonial.length === 0) {
      return res
        .status(400)
        .send({ message: 'The testimonial id dont exists' });
    } else {
      next();
    }
  } catch (e) {
    return res.send(e);
  }
};

module.exports = ValidateTestimonialId;
