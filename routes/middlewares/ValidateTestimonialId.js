const { Testimonials } = require('../../models');

const ValidateTestimonialId = async (req, res, next) => {
    idTestimony = req.params.id;
  try {
    const testimonial = await Testimonials.findAll({
      where: { id: idTestimony },
    });
    if (testimonial) {
      next();
    } else {
      return res.send('El testimonio no existe!!');
    }
  }
  catch (e) {
    return res.send(e);
  }
};

module.exports = ValidateTestimonialId;