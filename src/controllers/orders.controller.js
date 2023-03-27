const OrdersServices = require('../services/orders.service');
const HTTPStatus = require('../helpers/HTTP.status');

const getOneOrder = async (req, res) => {
  const { id } = req.params;

  const response = await OrdersServices.getOneOrder(id);
  return res.status(HTTPStatus.OK).json(response);
}

const createOrder = async (req, res) => {
  const payload = req.body;
  const response = await OrdersServices.createOrder(payload);

  return res.status(HTTPStatus.CREATED).json(response);
}

const confirmOrder = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const response = await OrdersServices.confirmOrder(id, payload);

  return res.status(HTTPStatus.OK).json(response);
}

module.exports = {
  getOneOrder,
  createOrder,
  confirmOrder,
}
