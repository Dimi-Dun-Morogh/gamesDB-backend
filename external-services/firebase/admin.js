const admin = require('firebase-admin');
const config = require('../../config/firebaseAdminConfig');

const serviceAccount = config;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-app-a19cf.firebaseio.com',
});

module.exports = admin;