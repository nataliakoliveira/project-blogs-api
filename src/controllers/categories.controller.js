const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  const { body } = req;

try {
  const { type, message } = await categoriesService.createCategories(body);
  // lógica do type feita pelo pedro steinmüller
  if (type !== 201) return res.status(400).json({ message });
  return res.status(201).json(message);
} catch (error) {
  return res.status(500).json({ message: error.message });
}
};

module.exports = {
  createCategory,
};