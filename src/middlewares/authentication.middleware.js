const { request } = require('express');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const BearerStrategy = require('passport-http-bearer');
const AccountsServices = require('../services/accounts.service');
const { verifyToken } = require('../helpers/token.jwt');
const CustomError = require('../helpers/error.custom');
const HTTPStatus = require('../helpers/HTTP.status');
const validate = require('../validations/login.validation');
const blocklist = require('../redis/blocklist.service');

passport.use(
  new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
  }, async (email, password, done) => {
    validate.login({ email, password });
    const userByEmail = await AccountsServices.getOneAccountByEmail({ email });
    if (!userByEmail) return done(CustomError('Email or Password Invalid !', HTTPStatus.BAD_REQUEST));

    const verifyPassword = bcryptjs.compare(password, userByEmail.password);
    if (!verifyPassword) return done(CustomError('Email or Password Invalid !', HTTPStatus.BAD_REQUEST));

    delete userByEmail.password;
    return done(null, userByEmail);
  }),
);

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const tokenExistsInBlocklist = await blocklist.verifyTokenInBlocklist(token);
        if (tokenExistsInBlocklist) return done(CustomError('Token logged out !', HTTPStatus.BAD_REQUEST));

        const user = verifyToken(token);

        request.token = token;
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    },
  ),
);
