const { url } = require('../config/RawgDb');
const axios = require('axios');

 async function  getGames(query) {
  try {
    console.log('getGames',url+query);
  const data = await axios.get(url+query);
  return  data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
module.exports = {
  getGames,
}

// '/games?dates=2020-07-01,2020-07-31&ordering=-released'