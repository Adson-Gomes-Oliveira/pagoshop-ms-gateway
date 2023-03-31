const axios = require('axios');

const getProducts = async () => {
  const response = await axios.get(`http://${process.env.PRODUCT_HOST}:3001/api/products/`);
  return response.data;
};

const getOneProduct = async (id) => {
  const response = await axios.get(`http://${process.env.PRODUCT_HOST}:3001/api/products/${id}`);
  return response.data;
};

const createProduct = async (payload) => {
  const response = await axios.post(`http://${process.env.PRODUCT_HOST}:3001/api/products/`, payload);
  return response.data;
};

const updateProduct = async (id, payload) => {
  const response = await axios.put(`http://${process.env.PRODUCT_HOST}:3001/api/products/${id}`, payload);
  return response.data;
};

const deleteProduct = async (id) => {
  await axios.delete(`http://${process.env.PRODUCT_HOST}:3001/api/products/${id}`);
  return null;
};

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
