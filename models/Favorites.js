const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavoritesSchema = new mongoose.Schema({
  favIds: {
    type: Array,
    required: true
  },
  user:  {
    type: String,
    required: true,
  },
});

mongoose.model('Favorites', FavoritesSchema);

module.exports = mongoose.model('Favorites');