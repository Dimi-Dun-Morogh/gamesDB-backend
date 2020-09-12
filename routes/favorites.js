const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleWare/authMiddleware');
const FavService = require('../services/favorites');

//  api/favorites  favIds:[]

router.post('/', authMiddleware, async (req, res) => {
  try {
    const data = {
      email: req.locals.email,
      ...req.body,
    };
    console.log(data);
    const favs = await FavService.updateFavs(data);
    res.status(200).send(favs);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {

    const fav = await FavService.getFav(req.locals.email);
    res.status(200).send(fav.favIds);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
