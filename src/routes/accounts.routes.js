const { Router } = require('express');
const accountsControllers = require('../controllers/accounts.controller');

const router = Router();

router.get('/', accountsControllers.getAccounts);
router.get('/:id', accountsControllers.getOneAccount);
router.post('/', accountsControllers.createAccount);
router.put('/:id', accountsControllers.updateAccount);
router.delete('/:id', accountsControllers.deleteAccount);

module.exports = router;
