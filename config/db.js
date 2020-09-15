if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config() }

module.exports = {
  dataBaseUrl: process.env.DATA_BASE_URL
}