const PaymentsServices = require('../services/payments.service');
const HTTPStatus = require('../helpers/HTTP.status');

const getPayments = async (req, res) => {
  const response = await PaymentsServices.getPayments();
  return res.status(HTTPStatus.OK).json(response);
}

const getOnePayment = async (req, res) => {
  const { id } = req.params;
  const response = await PaymentsServices.getOnePayment(id);

  return res.status(HTTPStatus.OK).json(response);
}

const createPayment = async (req, res) => {
  const payload = req.body;
  const response = await PaymentsServices.createPayment(payload);

  return res.status(HTTPStatus.CREATED).json(response);
}

const confirmPayment = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const response = await PaymentsServices.confirmPayment(id, payload);

  return res.status(HTTPStatus.OK).json(response);
}

const cancelPayment = async (req, res) => {
  const { id } = req.params;
  await PaymentsServices.cancelPayment(id);

  return res.status(HTTPStatus.NO_CONTENT).end();
}

module.exports = {
  getPayments,
  getOnePayment,
  createPayment,
  confirmPayment,
  cancelPayment,
}
