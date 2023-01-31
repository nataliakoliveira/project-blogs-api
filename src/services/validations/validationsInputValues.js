const schema = require('./schema');

const validateUser = (body) => {
  const { error } = schema.createUserSchema.validate(body);

  if (error) return error.message;

  return null;
};

module.exports = {
  validateUser,
};