require('express-async-errors');
require('./middlewares/authentication.middleware');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ exposedHeaders: 'Authorization' }));

app.get('/health-check', (_req, res) => res.status(200).send('Connection OK'));
app.use('/api/auth', routes.authenticationRoutes);
app.use('/api/products', routes.productsRoutes);
app.use('/api/accounts', routes.accountsRoutes);
app.use('/api/orders', routes.ordersRoutes);
app.use('/api/payments', routes.paymentsRoutes);
app.use(errorMiddleware);

module.exports = app;
