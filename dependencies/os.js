const shell = require('shelljs')
const os = {
	sys: function(command) {
		shell.exec(command, {silent:true}).stdout
	},
	popen: function(command){
		return shell.exec(command, {silent:true}).stdout
	},
	plateform: function(){
		euh = exec("uname", {silent:true}).stdout
		return euh
	}
};

module.exports = os
