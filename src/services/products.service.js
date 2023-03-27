const axios = require('axios');

const getProducts = async () => {
  const response = await axios.get(`http://${process.env.PRODUCT_HOST}:3001/api/products/`);
  return response;
}

const getOneProduct = async (id) => {
  const response = await axios.get(`http://${process.env.PRODUCT_HOST}:3001/api/products/${id}`);
  return response;
}

const createProduct = async (payload) => {
  const response = await axios.post(`http://${process.env.PRODUCT_HOST}:3001/api/products/`, payload);
  return response;
}

const updateProduct = async (id, payload) => {
  const response = await axios.put(`http://${process.env.PRODUCT_HOST}:3001/api/products/${id}`, payload);
  return response;
}

const deleteProduct = async (id) => {
  await axios.delete(`http://${process.env.PRODUCT_HOST}:3001/api/products/${id}`);
  return null;
}

const getCategories = async () => {
  const response = await axios.get(`http://${process.env.CATEGORY_HOST}:3001/api/categories/`);
  return response;
}

const getOneCategory = async (id) => {
  const response = await axios.get(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`);
  return response;
}

const createCategory = async (payload) => {
  const response = await axios.post(`http://${process.env.CATEGORY_HOST}:3001/api/categories/`, payload);
  return response;
}

const updateCategory = async (id, payload) => {
  const response = await axios.put(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`, payload);
  return response;
}

const updateStatusCategory = async (id, payload) => {
  const response = await axios.patch(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`, payload);
  return response;
};

const deleteCategory = async (id) => {
  await axios.delete(`http://${process.env.CATEGORY_HOST}:3001/api/categories/${id}`);
  return null;
}

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  updateStatusCategory,
  deleteCategory,
}
