const shell = require('shelljs')
const python = {
            print: function(string) { 
                console.log(string);
            },
            input: function(text) {
            	return shell.exec('read -p "' + text + '" IDK && echo $IDK').stdout
            }
    };

module.exports = python
