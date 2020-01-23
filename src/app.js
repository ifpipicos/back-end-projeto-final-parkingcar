const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const acl = require('express-acl');
const routes = require('./routes');
const database = require('./config/database');
const Config = require('./config/config');
const authMiddleware = require('./middlewares/auth');

const app = express();

acl.config({
  baseUrl: '/api/',
  path: 'src/config',
});

const configureExpress = () => {
  app.use(authMiddleware);
  app.use(acl.authorize.unless({ path: ['/api/auth/authenticate'] }));
  app.use(cors());
  app.use(helmet());
  app.use(helmet.xssFilter());
  app.use(helmet.noSniff());
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(Config.API_BASE, routes);
  return app;
};

module.exports = () => database().then(configureExpress);
