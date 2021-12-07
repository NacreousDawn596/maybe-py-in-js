const shell = require('shelljs')
var fs = require('fs')
const filesmanager = {
	read: function(file) {
		return shell.cat(file).stdout
	},
	write: function(file, text){
		shell.exec("echo '" + text + "' > " + file)
		return
	},
	add: function(file, text){
		shell.exec("echo '" + text + "' >> " + file, { silent: true })
		return
	}
};

module.exports = filesmanager
