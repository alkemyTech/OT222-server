const express = require('express');
const sgMail = require('../services/sendgrid');
const router = express.Router();

router.post('/api/mail', async (req, res) => {
  const { to, subject, text, html } = req.body;
  const message = {
    to,
    form: 'noeliapaz676@gmail.com',
    subject,
    text,
    html,
  };
  res.send(201).send({ success: true });
});

try {
  await sgMail.send(message);
} catch (err) {}

module.exports = router;
