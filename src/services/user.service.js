const { User } = require('../models');
const { generateToken } = require('../utils/JWT');
const validate = require('./validations/validationsInputValues');

const create = async (req, res) => {
  const error = validate.validateUser(req.body);

  if (error) return res.status(400).json({ message: error });

  const { displayName, email, password, image } = req.body;
  const userExists = await User.findOne({ where: { email, password } });

  if (userExists) return res.status(409).json({ message: 'User already registered' });

  const user = await User.create({ displayName, email, password, image });

  const token = generateToken({ data: user });

  return res.status(201).json({ token });
};

module.exports = {
  create,
};