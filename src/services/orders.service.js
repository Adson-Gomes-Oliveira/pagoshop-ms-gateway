const axios = require('axios');
const crypto = require('crypto');
const confirmOrderToProcessAndPayment = require('./confirmOrderToProcessAndPayment.producer.service');

const getOneOrder = async (id) => {
  const response = await axios.get(`http://${process.env.ORDER_HOST}:3003/api/orders/${id}`);
  return response.data;
};

const createOrder = async (payload) => {
  const response = await axios.post(`http://${process.env.ORDER_HOST}:3003/api/orders/`, payload);
  return response.data;
};

const confirmOrder = async (id, payload) => {
  const orderToConfirm = await getOneOrder(id);
  const processHash = crypto.randomBytes(20).toString('hex');

  await confirmOrderToProcessAndPayment('orderConfirmationToPayment', {
    paymentData: payload,
    processHash,
  });

  await confirmOrderToProcessAndPayment('orderConfirmationToProcess', {
    orderData: orderToConfirm,
    processHash,
  });

  return '';
};

module.exports = {
  getOneOrder,
  createOrder,
  confirmOrder,
};
