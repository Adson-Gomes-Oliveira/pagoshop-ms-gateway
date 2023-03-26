require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors());

app.use('/api/products');
app.use('/api/accounts');
app.use('/api/orders');
app.use('/api/payments');

module.exports = app;
