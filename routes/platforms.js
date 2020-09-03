const express = require('express');
const router = express.Router();
const platformServices = require('../services/platforms');

// /platforms
router.get('/', async (req, res) => {
  console.log('route platforms', req.originalUrl);
  try {
    const data = await platformServices.getPlatforms(req.originalUrl);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
