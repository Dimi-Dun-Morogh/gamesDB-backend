const express = require('express');
const cors = require('cors');
const app = express();
const games = require('./routes/games');
const platforms = require('./routes/platforms');
const PORT = 3000;
const ROUTES = {
  games: '/games',
  platforms: '/platforms',
};
app.use(express.json()); //activate middleware to parse JSON
app.use(cors());
// Routes
app.use(ROUTES.games, games);
app.use(ROUTES.platforms, platforms);

app.listen(PORT, () => {
  console.log(`Server up and running, PORT: ${PORT}`);
});
