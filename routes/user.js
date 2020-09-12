const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleWare/authMiddleware');
const userService = require('../services/users');
const FavService = require('../services/favorites');

router.get('/', authMiddleware, async (req, res) => {
  res.status(200).send(`email: ${req.locals.email}`);
});

router.get('/userbymail', authMiddleware, async (req, res) => {
  console.log('userbymail');
  try {
    const email = req.locals.email;
    const user = await userService.getUserByEmail(email);
    console.log(user, email);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/', authMiddleware, async (req, res) => {
  try {
    const newUser = {
      email: req.locals.email,
      ...req.body,
    };
    const user = await userService.createUser(newUser);
    //let's create  favorites item collection
    await FavService.createFavs(email);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/updateuser', authMiddleware, async (req, res) => {
  try {
    const UserData = {
      email: req.locals.email,
      ...req.body,
    };
    const user = await userService.updateUserData(UserData);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    console.log('user', user);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
