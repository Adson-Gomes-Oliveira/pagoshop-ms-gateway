const axios = require('axios').default;
const passport = require('passport');
const { Router } = require('express');
const categoriesControllers = require('../controllers/categories.controller');
const mongooseIdValidation = require('../middlewares/mongooseID.middleware');

const router = Router();

axios.defaults.headers.common.gatewayPass = true;
router.get('/', categoriesControllers.getCategories);
router.get('/:id', categoriesControllers.getOneCategory);

router.use(passport.authenticate('bearer', { session: false }));

router.post('/', categoriesControllers.createCategory);
router.put('/:id', mongooseIdValidation, categoriesControllers.updateCategory);
router.patch('/:id', mongooseIdValidation, categoriesControllers.updateCategoryStatus);
router.delete('/:id', mongooseIdValidation, categoriesControllers.deleteCategory);

module.exports = router;
