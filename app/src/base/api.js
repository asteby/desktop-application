const TrackVisor = require('@trackvisor/node');
const keychain = require('../utils/keychain');

const api = new TrackVisor();

api.tokenProvider = {

  get: keychain.getSavedToken,
  set: keychain.saveToken,

};

api.credentialsProvider = {

  get: keychain.getSavedCredentials,
  set: keychain.saveCredentials,

};

module.exports = api;
