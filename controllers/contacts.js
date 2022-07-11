var express = require('express');
var router = express.Router();
const { Contact } = require('../models');
const AdminAuth = require('../routes/middlewares/adminAuth');
const validateContactsFields = require("../routes/middlewares/validateContactsFields");

router.get('/',AdminAuth, async (req, res) => {
  await  Contact.findAll()
    .then(contacts => res.send(contacts))
    .catch(err => res.status(400).send(err));
});

router.post('/',AdminAuth, validateContactsFields,async (req, res) => {
  const { name, phone, email, message } = req.body;
  try {
      const contact = await Contact.create({
       name,
       phone,
       email,
       message,
    })
    res.status(200).json({contact})
    
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
});

router.delete('/:id',AdminAuth, async (req, res) => {
    const idParam = req.params.id;
    try{
       Contact.destroy({where:{id: idParam}})
       res.status(200).json("contacto eliminado")
    }catch{
        res.status(400).json({error: error.message})
    }
})

module.exports = router;