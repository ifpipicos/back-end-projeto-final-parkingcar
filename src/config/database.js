// eslint-disable-next-line import/no-unresolved
const mongoose = require('mongoose');
const Config = require('./config');

mongoose.Promise = Promise;

const mongooURL = Config.MONGODB_URL;

const config = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  // useCreateIndex: true,
};

const connect = () => mongoose.connect(mongooURL, config);

module.exports = connect;
