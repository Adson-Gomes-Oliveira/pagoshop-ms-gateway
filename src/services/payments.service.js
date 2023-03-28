const axios = require('axios');

const getPayments = async () => {
  const response = await axios.get(`http://${process.env.PAYMENT_HOST}:3004/api/payments/`);
  return response.data;
};

const getOnePayment = async (id) => {
  const response = await axios.get(`http://${process.env.PAYMENT_HOST}:3004/api/payments/${id}`);
  return response.data;
};

const createPayment = async (payload) => {
  const response = await axios.post(`http://${process.env.PAYMENT_HOST}:3004/api/payments/`, payload);
  return response.data;
};

const confirmPayment = async (id, payload) => {
  const response = await axios.put(`http://${process.env.PAYMENT_HOST}:3004/api/payments/${id}`, payload);
  return response.data;
};

const cancelPayment = async (id) => {
  await axios.delete(`http://${process.env.PAYMENT_HOST}:3004/api/payments/${id}`);
  return null;
};

module.exports = {
  getPayments,
  getOnePayment,
  createPayment,
  confirmPayment,
  cancelPayment,
};
