module.exports = (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  if (!req.body.categoryIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};