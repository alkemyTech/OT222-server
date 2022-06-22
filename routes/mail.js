const express = require('express');
const sgMail = require('../services/sendgrid');
const router = express.Router();

router.post('/', async (req, res) => {
  const { to, subject, text, html, from } = req.body;
  const message = {
    to,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(message);
  } catch (err) {
    return res.status(err.code).send(err.message);
  }
  res.status(201).send({ success: true });
});

module.exports = router;
