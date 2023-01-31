const { userService } = require('../services');

const createUser = async (req, res) => {
const { type, message } = await userService.createUser(req.body);

if (type === 'error') return res.status(400).json({ message });

return res.status(201).json({ message });
};

module.exports = {
  createUser,
};