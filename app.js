const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { dataBaseUrl } = require('./config/db');
const app = express();
const games = require('./routes/games');
const platforms = require('./routes/platforms');
const favorites = require('./routes/favorites');
const UserController = require('./routes/user');


const PORT =  process.env.PORT || 3000;
const ROUTES = {
  games: '/games',
  platforms: '/platforms',
  users:  '/api/users',
  favorites: '/api/favorites',
};
app.use(express.json()); //activate middleware to parse JSON
app.use(cors());

//connect to Db
mongoose.connect(dataBaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Mongo connected success'))
.catch(err => console.log(err))

// Routes
app.use(ROUTES.games, games);
app.use(ROUTES.platforms, platforms);
app.use(ROUTES.users, UserController);
app.use(ROUTES.favorites, favorites);

app.listen(PORT, () => {
  console.log(`Server up and running, PORT: ${PORT}`);
});
