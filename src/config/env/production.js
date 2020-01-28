class Config {
  constructor() {
    this.env = 'production';
    this.PORT = 3000;
    this.API_BASE = '/api';
    // eslint-disable-next-line max-len
    this.MONGODB_URL = 'mongodb://udoafldklaw4akmvdcm1:mMi3FBX06tEI4QjgZhjU@borywnjl4pzzdf0-mongodb.services.clever-cloud.com:27017/borywnjl4pzzdf0';
  }
}

module.exports = new Config();
