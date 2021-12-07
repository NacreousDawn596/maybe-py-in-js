const randm = require('./random.js')
const random = {
            shuffle: function(array) {
				  let currentIndex = array.length,  randomIndex;
				  while (currentIndex != 0) {
					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex--;
					[array[currentIndex], array[randomIndex]] = [
					  array[randomIndex], array[currentIndex]];
				  }
				  return array;

            },
            
            randint: function(min, max) {
            	return Math.floor(Math.random() * (max - min +1)) + min;
            },
            
            choice: function(array) {
            	return array[Math.floor(Math.random() * array.length)];
            },
            
            ranstr: function(){
            	array = random.shuffle("a z e r t y u i o p m l k j h g f d s q w x c v b n A Z E R T Y U I O P M L K J H G F D S Q W X C V B N".split(' '))
            	idk = []
            	for (var i = 0; i < random.randint(0, 52); i++){
            		idk.unshift(random.choice(array))
            	}
            	return idk.join('')
            }
    };

module.exports = random
