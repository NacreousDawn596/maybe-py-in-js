const encrypt=require('./dependencies/encrypt.js');const python=require('./dependencies/python.js');const os=require('./dependencies/os.js');const datetime=require('./dependencies/datetime.js');const random=require('./dependencies/random.js');const shell=require('shelljs');const fm=require('./dependencies/filesmanager.js');function print(string){console.log(string)};function sleep(time){var now = new Date().getTime();while(new Date().getTime()<now+time*1000){}};




list = [0, 1, 2, 3, 4, 5]
print('#testing arrays:')
print(list)
print(random.shuffle(list))
print(random.choice(list))
print(random.ranstr())
sleep(1)
print("#testing os:")
print("plateform: " + os.plateform)
sleep(1)
print('#ls command:')
print(os.popen('ls'))
sleep(1)
print('testing datetime')
print(datetime.seconds())
print(datetime.minutes())
print(datetime.hours())
print(datetime.time())
print(datetime.days())
print(datetime.months())
print(datetime.years())
print(datetime.date())
sleep(1)
print('#testing filesmanager')
fm.write('idk.text', 'hewwo, I"m data')
print(fm.read('idk.text'))
print('#testing encryption')
print(encrypt.encrypt('yo son of bitch'))
print(encrypt.decrypt('wgxsnUa kOmDvNMtPWJFMBVXI ficRktwCY w'))