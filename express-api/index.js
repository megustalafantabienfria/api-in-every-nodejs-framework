const app = require('./app');
const port = process.env.PORT || 8080;

(async () => {
  try {
    await app.listen(port);

    console.log(`Express-api listening on port ${port}`);
  } catch (error) {
    console.error(error);
  }
})();

