const passport = require('passport');
const { Router } = require('express');
const categoriesControllers = require('../controllers/categories.controller');

const router = Router();

router.get('/', categoriesControllers.getCategories);
router.get('/:id', categoriesControllers.getOneCategory);

router.use(passport.authenticate('bearer', { session: false }));

router.post('/', categoriesControllers.createCategory);
router.put('/:id', categoriesControllers.updateCategory);
router.patch('/:id', categoriesControllers.updateCategoryStatus);
router.delete('/:id', categoriesControllers.deleteCategory);

module.exports = router;
