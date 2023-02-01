const { userService } = require('../services');

const createUser = async (req, res) => {
const { body } = req;

const { type, message } = await userService.create(body);
if (type) return res.status(type).json({ message });

return res.status(201).json({ token: message });
};

module.exports = {
  createUser,
};