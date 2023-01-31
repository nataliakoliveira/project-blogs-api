const { User } = require('../models');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { error: true, message: 'Invalid fields' };

  return { error: false, message: 'Logged in successfully', user };
};

module.exports = {
  login,
};