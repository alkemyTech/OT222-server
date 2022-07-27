const { Testimonials } = require('../models');

const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonials.findAll();
    res.status(200).send(testimonials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getTestimonialsById = async (req, res) => {
  const { id } = req.params;

  try {
    const testimonials = await Testimonials.findByPk(id);
    if (testimonials === null) {
      res.json({
        message: 'Testimony Not Found!.',
      });
    } else {
      res.json(testimonials);
    }
  } catch (error) {
    console.log(error);
  }
};

const createTestimonials = async (req, res) => {
  const { name, content, image } = req.body;
  try {
    const testimonials = await Testimonials.create({
      name,
      content,
      image,
    });

    res.json({
      testimonials,
      message: 'Testimony created sucessfull',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editTestimonialsById = async (req, res) => {
  const idParam = req.params.id;
  try {
    await Testimonials.update(
      {
        name: req.body.name,
        content: req.body.content,
        image: req.body.image,
      },
      { where: { id: idParam } }
    );
    const testimonial = await Testimonials.findOne({
      where: { id: idParam },
    });
    res.status(200).json(testimonial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTestimonialsById = (req, res) => {
  const { id } = req.params;
  Testimonials.destroy({
    where: { id },
  })
    .then(testimonial => res.send({ message: 'Testimony deleted sucessfully' }))
    .catch(err => res.send(err));
};

module.exports = {
  getTestimonials,
  editTestimonialsById,
  createTestimonials,
  getTestimonialsById,
  deleteTestimonialsById,
};
