const dotenv = require('dotenv').config();

const config = {
  "type": "service_account",
  "project_id": "chat-app-a19cf",
  "private_key_id": "d3475d8b43221cfc24e3838c27a203086694c169",
  "private_key":process.env.PRIVATE_KEY,
  "client_email": "firebase-adminsdk-zi9fp@chat-app-a19cf.iam.gserviceaccount.com",
  "client_id": "113201953749087844817",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zi9fp%40chat-app-a19cf.iam.gserviceaccount.com"
}

module.exports = config;