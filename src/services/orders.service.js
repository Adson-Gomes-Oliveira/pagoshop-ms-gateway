const axios = require('axios');
const rabbitMQCustom = require('../helpers/rabbitMQ');

const getOneOrder = async (id) => {
  const response = await axios.get(`http://${process.env.ORDER_HOST}:3003/api/orders/${id}`);
  return response.data;
};

const createOrder = async (payload) => {
  const response = await axios.post(`http://${process.env.ORDER_HOST}:3003/api/orders/`, payload);
  return response.data;
};

const confirmOrder = async (id, payload) => {
  await rabbitMQCustom('orderConfirmation', {
    orderId: id,
    paymentData: payload,
  });

  return '';
};

module.exports = {
  getOneOrder,
  createOrder,
  confirmOrder,
};
