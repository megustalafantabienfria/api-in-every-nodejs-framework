const model = require('./userModel');
const routes = require('./userRoutes');
const controller = require('./userController');
const service = require('./userService');


module.exports = {
  model, service, controller, routes
}