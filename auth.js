
//Stolen from http://lollyrock.com/articles/nodejs-encryption/, provides basic encryption.
//This is necessary so passwords stored in cookies aren't visible.
var crypto = require('crypto'),
	algorithm = 'aes-256-ctr',
	password = '%stK6pbGt2gmaky5rR%R%1s@GqSe17';

var User = require("./dbtemplates/user-core");

var encrypt = function(text) {
	var cipher = crypto.createCipher(algorithm,password)
	var crypted = cipher.update(text,'utf8','hex')
	crypted += cipher.final('hex');
	return crypted;
}
 
var decrypt = function(text) {
	var decipher = crypto.createDecipher(algorithm,password)
	var dec = decipher.update(text,'hex','utf8')
	dec += decipher.final('utf8');
	return;
}

module.exports = {
	encrypt: encrypt,
	decrypt: decrypt
}