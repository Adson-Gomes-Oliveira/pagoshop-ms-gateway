const ticketOnHeader = (req, _res, next) => {
  req.headers.gatewayPass = true;
  next();
};

module.exports = ticketOnHeader;
