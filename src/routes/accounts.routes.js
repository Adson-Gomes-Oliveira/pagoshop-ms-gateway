const passport = require('passport');
const { Router } = require('express');
const accountsControllers = require('../controllers/accounts.controller');

const router = Router();

router.post('/', accountsControllers.createAccount);

router.use(passport.authenticate('bearer', { session: false }));

router.get('/', accountsControllers.getAccounts);
router.get('/:id', accountsControllers.getOneAccount);
router.put('/:id', accountsControllers.updateAccount);
router.delete('/:id', accountsControllers.deleteAccount);

module.exports = router;
