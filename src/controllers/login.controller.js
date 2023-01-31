const { loginService } = require('../services');
const { generateToken } = require('../utils/JWT');

const login = async (req, res) => {
  const { email, password } = req.body;

  const { error, message, user } = await loginService.login(email, password);

  if (error) return res.status(400).json({ message });

  const token = generateToken({ data: user });

  return res.status(200).json({ message, token });
};

module.exports = {
  login,
};