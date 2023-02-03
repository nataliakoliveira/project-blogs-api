const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const validatePost = require('../middlewares/validatePost');
const postController = require('../controllers/post.controller');

const postRouter = express.Router();

postRouter.post('/', validateToken, validatePost, postController.create);
postRouter.get('/', validateToken, postController.getAll);
postRouter.get('/:id', validateToken, postController.getById);
postRouter.put('/:id', validateToken, validatePost, postController.update);

module.exports = postRouter;