const express = require('express');
const { categoriesController } = require('../controllers');
const { validateToken } = require('../middlewares/validateToken');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateToken, categoriesController.createCategory);

module.exports = categoriesRouter;