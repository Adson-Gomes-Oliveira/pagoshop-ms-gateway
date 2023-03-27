require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());

app.use('/api/products', routes.productsRoutes);
app.use('/api/accounts', routes.accountsRoutes);
app.use('/api/orders', routes.ordersRoutes);
app.use('/api/payments', routes.paymentsRoutes);

module.exports = app;
