const admin = require('firebase-admin');

const serviceAccount = require('../../config/firebaseAdminConfig.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://chat-app-a19cf.firebaseio.com',
});

module.exports = admin;