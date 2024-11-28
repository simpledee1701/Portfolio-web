const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

router.post('/', async (req, res) => {
  const newMessage = new Contact(req.body);
  await newMessage.save();
  res.json({ message: 'Message sent!' });
});

module.exports = router;
