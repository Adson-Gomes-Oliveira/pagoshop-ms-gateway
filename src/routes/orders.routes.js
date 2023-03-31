const axios = require('axios').default;
const passport = require('passport');
const { Router } = require('express');
const ordersControllers = require('../controllers/orders.controller');

const router = Router();

axios.defaults.headers.common.gatewayPass = true;
router.use(passport.authenticate('bearer', { session: false }));

router.get('/:id', ordersControllers.getOneOrder);
router.post('/', ordersControllers.createOrder);
router.post('/confirm/:id', ordersControllers.confirmOrder);

module.exports = router;
