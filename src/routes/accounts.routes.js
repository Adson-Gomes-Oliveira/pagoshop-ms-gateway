const passport = require('passport');
const { Router } = require('express');
const accountsControllers = require('../controllers/accounts.controller');
const mongooseIdValidation = require('../middlewares/mongooseID.middleware');

const router = Router();

router.post('/', accountsControllers.createAccount);

router.use(passport.authenticate('bearer', { session: false }));

router.get('/', accountsControllers.getAccounts);
router.get('/:id', mongooseIdValidation, accountsControllers.getOneAccount);
router.put('/:id', mongooseIdValidation, accountsControllers.updateAccount);
router.delete('/:id', mongooseIdValidation, accountsControllers.deleteAccount);

module.exports = router;
