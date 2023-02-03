const { postService } = require('../services');

const create = async (req, res, next) => {
  const { email } = req.user;
  const post = req.body;

  try {
    const { type, message } = await postService.createPost(email, post);
    if (type) return res.status(type).json({ message });
    return res.status(201).json({ message });
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const posts = await postService.getAllPosts();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { type, message } = await postService.getPostById(id);
    if (type) return res.status(404).json({ message });
    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
