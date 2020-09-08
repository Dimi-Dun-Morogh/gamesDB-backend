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

async function updateFavs(data) {
  try {
    //favIds:[]
    const favs = await Favorites.updateOne(
      { user: data.email },
       data,
      { upsert: true },
    );
    const user = await User.updateOne({ email: data.email }, data, {
      upsert: true,
    });
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  createFavs,
  updateFavs,
};
