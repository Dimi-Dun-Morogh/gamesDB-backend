const Favorites = require('../models/Favorites');

async function createFavs(email) {
  try {
    const favs = await Favorites.create({ favIds: [], user: email });
    console.log(favs);
    return favs;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function getFav(email) {
  try {
    const fav = Favorites.findOne({user: email})
    return fav;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function updateFavs(data) {
  try {
    //favIds:[]
    await Favorites.updateOne(
      { user: data.email },
       data,
      { upsert: true },
    );
    const fav = await Favorites.findOne({user: data.email})
      return fav.favIds;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  createFavs,
  updateFavs,
  getFav,
};
