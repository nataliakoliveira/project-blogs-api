const express = require('express');
const { loginController } = require('../controllers');
const { validateLogin } = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.login);

module.exports = loginRouter;
