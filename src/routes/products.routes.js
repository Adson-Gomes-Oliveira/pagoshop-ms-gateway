const passport = require('passport');
const { Router } = require('express');
const productsControllers = require('../controllers/products.controller');
const mongooseIdValidation = require('../middlewares/mongooseID.middleware');

const router = Router();

router.get('/', productsControllers.getProducts);
router.get('/:id', mongooseIdValidation, productsControllers.getOneProduct);

router.use(passport.authenticate('bearer', { session: false }));

router.post('/', productsControllers.createProduct);
router.put('/:id', mongooseIdValidation, productsControllers.updateProduct);
router.patch('/:id', mongooseIdValidation, productsControllers.deleteProduct);

module.exports = router;
