const axios = require('axios');
const confirmOrderToProcessAndPayment = require('./confirmOrderToProcessAndPayment.producer.service');

const getOneOrder = async (id) => {
  const response = await axios.get(`http://${process.env.ORDER_HOST}/api/orders/${id}`);
  return response.data;
};

const createOrder = async (payload) => {
  const response = await axios.post(`http://${process.env.ORDER_HOST}/api/orders/`, payload);
  return response.data;
};

const confirmOrder = async (id, payload) => {
  const orderToConfirm = await getOneOrder(id);
  const defaultInvoice = await axios.get(`http://${process.env.PAYMENT_HOST}/api/invoices`);
  const defaultInvoiceData = defaultInvoice.data;

  await confirmOrderToProcessAndPayment('orderConfirmationToPayment', {
    paymentData: payload,
    invoiceId: defaultInvoiceData.id,
  });

  await confirmOrderToProcessAndPayment('orderConfirmationToProcess', {
    orderData: orderToConfirm,
    invoiceId: defaultInvoiceData.id,
  });

  return '';
};

module.exports = {
  getOneOrder,
  createOrder,
  confirmOrder,
};
