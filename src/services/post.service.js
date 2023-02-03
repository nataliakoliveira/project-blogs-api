const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }, email) => {
  const { userId } = await User.findOne({ where: { email } });
  console.log(userId);
  
  const { count } = await Category.findAndCountAll({
    where: {
      id: { [Op.in]: categoryIds },
    },
  });
  if (count !== categoryIds.length) {
    return { type: 400, message: 'Invalid category ID' };
  }

  const post = await BlogPost.create({ title, content, userId });
  await PostCategory.bulkCreate(
    categoryIds.map((categoryId) => ({
      postId: post.id,
      categoryId,
    })),
  );
  return { type: 201, message: 'Post created successfully' };
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],

  });

  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });

  if (!post) return { type: 404, message: 'Post does not exist' };

  return { type: null, message: post };
};

const updatePost = async (id, email, update) => {
  const { userId } = await User.findOne({ where: { email } });
  const [updated] = await BlogPost.update(update, {
    where: { id, userId },
  });

  if (!updated) return { type: 404, message: 'Unauthorized user' };

  return { type: null, message: 'Post updated successfully' };
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};