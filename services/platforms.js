const { url } = require('../config/RawgDb');
const axios = require('axios');
async function getPlatforms(query) {
  try {
    console.log('getPlatforms',url + query);
    const data = await axios.get(url + query);
    return data.data;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = {
  getPlatforms,
};
