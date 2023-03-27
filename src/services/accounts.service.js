const axios = require('axios');

const getAccounts = async () => {
  const response = await axios.get(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/`);
  return response;
}

const getOneAccount = async (id) => {
  const response = await axios.get(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/${id}`);
  return response;
}

const createAccount = async (payload) => {
  const response = await axios.post(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/`, payload);
  return response;
}

const updateAccount = async (id, payload) => {
  const response = await axios.put(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/${id}`, payload);
  return response;
}

const deleteAccount = async (id) => {
  await axios.delete(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/${id}`);
  return null;
}

module.exports = {
  getAccounts,
  getOneAccount,
  createAccount,
  updateAccount,
  deleteAccount,
}
