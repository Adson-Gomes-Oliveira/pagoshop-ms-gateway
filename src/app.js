require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const axios = require('axios');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
axios.interceptor.request.use((config) => {
  config.headers.gatewayPass = true;
});

app.use('/api/products', routes.productsRoutes);
app.use('/api/accounts', routes.accountsRoutes);
app.use('/api/orders', routes.ordersRoutes);
app.use('/api/payments', routes.paymentsRoutes);

module.exports = app;
