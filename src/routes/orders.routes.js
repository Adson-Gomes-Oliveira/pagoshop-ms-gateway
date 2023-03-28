const { Router } = require('express');
const ordersControllers = require('../controllers/orders.controller');

const router = Router();

router.get('/:id', ordersControllers.getOneOrder);
router.post('/', ordersControllers.createOrder);
router.post('/confirm/:id', ordersControllers.confirmOrder);

module.exports = router;
