const AccountsServices = require('../services/accounts.service');
const HTTPStatus = require('../helpers/HTTP.status');

const getAccounts = async (req, res) => {
  const response = await AccountsServices.getAccounts();
  return res.status(HTTPStatus.OK).json(response);
}

const getOneAccount = async (req, res) => {
  const { id } = req.params;
  const response = await AccountsServices.getOneAccount(id);

  return res.status(HTTPStatus.OK).json(response);
}

const createAccount = async (req, res) => {
  const payload = req.body;
  const response = await AccountsServices.createAccount(payload);

  return res.status(HTTPStatus.CREATED).json(response);
}

const updateAccount = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const response = await AccountsServices.updateAccount(id, payload);

  return res.status(HTTPStatus.OK).json(response);
}

const deleteAccount = async (req, res) => {
  const { id } = req.params;
  await AccountsServices.deleteAccount(id);

  return res.status(HTTPStatus.NO_CONTENT).end();
}

module.exports = {
  getAccounts,
  getOneAccount,
  createAccount,
  updateAccount,
  deleteAccount,
}
