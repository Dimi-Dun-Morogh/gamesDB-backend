const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleWare/authMiddleware');
const FavService = require('../services/favorites');

//favorites  favIds:[]

router.post('/', authMiddleware, async (req, res) => {
  try {
    const data = {
      email: req.locals.email,
      ...req.body,
    };
    const favs = await FavService.updateFavs(data);
  } catch (error) {
    res.status(200).send(error);
  }
});

module.exports = router;
