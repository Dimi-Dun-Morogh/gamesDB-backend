const express = require('express');
const router = express.Router();
const gamesServices = require('../services/games');


// games/
router.get('/', async (req, res) => {
  console.log('route /games', req.originalUrl);
  try {
    const data = await gamesServices.getGames(req.originalUrl);
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
