var express = require('express');
var router = express.Router();
const Model = require('../models/index');

router.post('/', async (req, res) => {
  const { name, content, image } = req.body;

  await Model.activities
    .create({
      name,
      content,
      image,
    })
    .then(activities => res.status(201).json(activities))
    .catch(err => res.status(400).send(err));
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, content, image } = req.body;
  
  const activity = await Model.activities.findOne({ where: { id: id } });
  
  if (activity === null) {
    return res.json({ message: 'Activity not found' });
  }
  
  if (name === undefined && content === undefined && image === undefined) {
    return res.status(400).json({ message: 'body cant be empty' })
  }
  try {
    const item = await Model.activities.update(
      {
        name,
        content,
        image,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.json({
      name,
      content,
      image,
    });
  } catch (error) {
    console.log(error)
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  Model.activities
    .destroy({
      where: { id },
    })
    .then(activity => res.send({ message: 'Activity deleted sucessfull' }))
    .catch(err => res.send(err));
});

router.get('/', async (req, res) => {
  const activities = await Model.activities.findAll();
  res.json(activities);
});

module.exports = router;
