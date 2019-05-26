// eslint-disable-next-line new-cap
const api = require('express').Router();
const controller = require('./index').controller;

api.post('/signin', controller.signIn);
api.post('/login', controller.logIn);
api.post('/logout', controller.logOut);

module.exports = api;