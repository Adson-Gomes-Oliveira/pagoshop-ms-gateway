const redis = require('redis');
require('dotenv').config();

const client = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || '6379',
  },
  prefix: 'blocklist:',
});

client.connect();

module.exports = client;
