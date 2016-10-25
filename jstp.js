'use strict';

var common = require('./lib/common');

var jstp = {};
module.exports = jstp;

common.extend(jstp,
  require('./lib/record-serialization'),
  require('./lib/object-serialization'),
  require('./lib/errors')
);

jstp.RemoteProxy = require('./lib/remote-proxy');
jstp.Connection = require('./lib/connection');
