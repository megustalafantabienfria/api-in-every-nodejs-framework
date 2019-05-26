const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
  /* Randomly generated password. */
  secret: ':e[TF^36<?U:7p,E',
  resave: false,
  saveUninitialized: false
}));

app.use('user', require('./user/index').routes);

module.exports = app;
