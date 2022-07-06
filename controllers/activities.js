var express = require('express');
var router = express.Router();
const Model = require("../models/index");

router.post('/', async (req, res) => {
    const{name, content, image}= req.body;
   await  Model.activities.create({
     name,
     content,
     image
    })
    .then(activities => res.send(activities))
    .catch(err => res.status(400).send(err));
})


module.exports = router;