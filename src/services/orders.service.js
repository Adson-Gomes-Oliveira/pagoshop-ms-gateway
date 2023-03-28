const axios = require('axios');

const getOneOrder = async (id) => {
  const response = await axios.get(`http://${process.env.ORDER_HOST}:3003/api/orders/${id}`);
  return response;
};

const createOrder = async (payload) => {
  const response = await axios.post(`http://${process.env.ORDER_HOST}:3003/api/orders/`, payload);
  return response;
};

const confirmOrder = async (id, payload) => {
  const response = await axios.post(`http://${process.env.ORDER_HOST}:3003/api/orders/${id}`, payload);
  return response;
};

module.exports = {
  getOneOrder,
  createOrder,
  confirmOrder,
};
