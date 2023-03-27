const axios = require('axios');

const login = async (payload) => {
  const response = await axios.post(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/login`, payload);
  return response;
}

const logout = async (token) => {
  await axios.get(`http://${process.env.ACCOUNT_HOST}:3002/api/accounts/logout`, {
    headers: { Authorization: token }
  });
  return null;
}

module.exports = {
  login,
  logout,
};
