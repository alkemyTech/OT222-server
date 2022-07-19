const { Categories } = require('../models');

const editCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const category = await Categories.findOne({ where: { id: id } });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
    }
    const categoryUpdated = await category.update(
      {
        name: name,
        description: description,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({
      categoryUpdated,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  editCategoryById,
};
