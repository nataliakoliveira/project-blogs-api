const { userService } = require('../services');

const createUser = async (req, res) => {
const { body } = req;

const { type, message } = await userService.create(body);
if (type) return res.status(type).json({ message });

return res.status(201).json({ token: message });
};

const getAllUsers = async (_req, res) => {
const { type, message } = await userService.getAll();

return res.status(type).json(message);
};

const getUserById = async (req, res) => {
const { id } = req.params;

const { type, message } = await userService.getById(id);

return res.status(type).json(message);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};