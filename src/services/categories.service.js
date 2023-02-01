const { Category } = require('../models');

const createCategories = async (body) => {
  const { name } = body;
  if (!name) return { type: 400, message: '"name" is required' };
  const categoryExists = await Category.create({ name });
  return { type: 201, message: categoryExists };
};

module.exports = {
  createCategories,
};