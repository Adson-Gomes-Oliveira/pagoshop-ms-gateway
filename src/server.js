/* eslint-disable no-console */
const app = require('./app');

const port = process.env.PORT || '5000';

app.listen(port, () => console.log(`Gateway running on port ${port}`));
