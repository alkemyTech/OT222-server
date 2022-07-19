const { Testimonials } = require('../../models');

const ValidateTestimonialId = async (req, res, next) => {
  idTestimony = req.params.id;
  try {
    const testimonial = await Testimonials.findAll({
      where: { id: idTestimony },
    });

    if (testimonial.length === 0) {
      return res.send('El testimonio no existe!!');
    } else {
      next();
    }
  } catch (e) {
    return res.send(e);
  }
};

module.exports = ValidateTestimonialId;
