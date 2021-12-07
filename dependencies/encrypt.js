const random = require('./random.js')
const os = require('./os.js')
const fm = require('./filesmanager.js')
const encrypt = {
	encrypt: function(text) {
		idk = []
		for (lines of text.split('\n')){
			for (words of lines.split(' ')){
				function check(){
					en = fm.read('~/.encrypt.txt')
					for (nn of en.split('\n')){
						if (words == nn.split('¹')[0]){
							idk.push(nn.split('¹')[1])
							return
						}
					}
					ugh = random.ranstr()
					os.system('echo "' + words + "¹" + ugh + '" >> ~/.encrypt.txt')
					idk.push(ugh)
				}
				check()
			}
			idk.push('\n')
		}
		return idk.join(' ')
	},
	decrypt: function(text){
		dec = []
		for (lines of text.split('\n')){
			for (words of lines.split(' ')){
				for (de of fm.read("~/.encrypt.txt").split('\n')){
					if (words == de.split('¹')[1]){
						dec.push(de.split("¹")[0])
					}
				}
			}
			dec.push('\n')
		}
		return dec.join(' ')
	}
};
module.exports = encrypt
