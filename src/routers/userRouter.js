const express = require('express');
const { userController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const userRouter = express.Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', validateToken, userController.getAllUsers);

module.exports = userRouter;