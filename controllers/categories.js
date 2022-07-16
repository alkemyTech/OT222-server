var express = require('express');
var router = express.Router();
const { Category } = require('../models');

router.get('/', async (req, res) => {
  await Category.findAll()
    .then(categories => {
      res.send(categories);
    })
    .catch(err => res.status(400).send(err));
});

router.get('/:id', async (req, res) => {
  await Category.findOne({ where: { id: req.params.id } })
    .then(category => {
      res.send(category);
    })
    .catch(err => res.status(400).send(err));
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  console.log('id', id);

  const category = await Category.findOne({ where: { id: req.params.id } });

  if (!category) {
    res.json({ message: 'Category not found' });
  }

  await Category.update(
    {
      name: name,
      description: description,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(category => res.status(200).json({ message: 'Update successful!' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
