require('dotenv').config({ path: '../.env' });

const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || process.env.DEFAULT_PORT;
const mongoHost = process.env.DB_HOST;
const mongoUser = process.env.DB_USER;
const mongoPass = process.env.DB_PASS;

const mongoURI = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}`;

(async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    await app.listen(port);

    console.log(`Express-api listening on port ${port} and connected to Mongo host ${mongoURI}`);
  } catch (error) {
    console.error(error);
  }
})();

