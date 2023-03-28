const passport = require('passport');
const { Router } = require('express');
const productsControllers = require('../controllers/products.controller');

const router = Router();

router.get('/', productsControllers.getProducts);
router.get('/:id', productsControllers.getOneProduct);

router.use(passport.authenticate('bearer', { session: false }));

router.post('/', productsControllers.createProduct);
router.put('/:id', productsControllers.updateProduct);
router.patch('/:id', productsControllers.deleteProduct);

module.exports = router;
