
//Stolen from http://lollyrock.com/articles/nodejs-encryption/, provides basic encryption.
//This is necessary so passwords stored in cookies aren't visible.

var credentials = require('./credentials.js');

var crypto = require('crypto');
var algorithm = 'aes192';
var password = credentials.encryptionSecret;

var encrypt = function(text) {
	var cipher = crypto.createCipher(algorithm, password);
	var crypted = cipher.update(text, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
}
 
var decrypt = function(text) {
	var decipher = crypto.createDecipher(algorithm, password);
	var dec = decipher.update(text, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}

module.exports = {
	encrypt: encrypt,
	decrypt: decrypt
}