const axios = require('axios').default;
const passport = require('passport');
const { Router } = require('express');
const authenticationControllers = require('../controllers/authentication.controller');

const router = Router();

axios.defaults.headers.common.gatewayPass = true;
router.post('/login', passport.authenticate('local', { session: false }), authenticationControllers.login);

router.use(passport.authenticate('bearer', { session: false }));

router.get('/logout', authenticationControllers.logout);

module.exports = router;
