const datetime = {
            minutes: function() {
            	var today = new Date()
				return today.getMinutes()
            },
            
            hours: function() {
            	var today = new Date()
            	return today.getHours()
            },
            
            months: function() {
            	var today = new Date()
            	return today.getMonth()
            },
            years: function() {
            	var today = new Date()
            	return today.getFullYear()
            },
            days: function() {
            	var today = new Date()
            	return today.getDay()
            },
            date: function() {
            	var today = new Date()
            	return today.getDay() + "/" + today.getMonth() + "/" + today.getFullYear()
            },
            time: function() {
            	var today = new Date()
            	return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            },
            seconds: function(){
            	var today = new Date()
            	return today.getSeconds()
            }
    };

module.exports = datetime

