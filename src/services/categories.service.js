const axios = require('axios');

const getCategories = async () => {
  const response = await axios.get(`http://${process.env.CATEGORY_HOST}:3001/api/categories/`);
  return response;
};

const getOneCategory = async (id) => {
  const response = await axios.get(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`);
  return response;
};

const createCategory = async (payload) => {
  const response = await axios.post(`http://${process.env.CATEGORY_HOST}:3001/api/categories/`, payload);
  return response;
};

const updateCategory = async (id, payload) => {
  const response = await axios.put(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`, payload);
  return response;
};

const updateCategoryStatus = async (id, payload) => {
  const response = await axios.patch(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`, payload);
  return response;
};

const deleteCategory = async (id) => {
  await axios.delete(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`);
  return null;
};

module.exports = {
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  updateCategoryStatus,
  deleteCategory,
};
