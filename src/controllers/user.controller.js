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

if (type !== 200) return res.status(404).json({ message });

return res.status(200).json(message);
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};