const { addToken } = require('../redis/blocklist.service');
const { generateToken } = require('../helpers/token.jwt');
const HTTPStatus = require('../helpers/HTTP.status');

const login = async (req, res) => {
  const token = generateToken(req.user);
  return res
    .status(HTTPStatus.OK)
    .set('Authorization', `Bearer ${token}`)
    .json({
      userId: req.user._id,
      name: req.user.name,
    });
};

const logout = async (req, res) => {
  const { token } = req;
  await addToken(token);

  res.status(204).end();
};

module.exports = {
  login,
  logout,
};
