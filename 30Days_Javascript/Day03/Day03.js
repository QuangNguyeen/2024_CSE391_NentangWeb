// Exercise 5
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4!=='4')
console.log(4==='4')
console.log('python'.length < 'jargon'.length)

// Exercise7

const currentDay = Date.now()
const currentDate = new Date(currentDay);
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth() + 1); // Month starts from 0, so add 1 for human-readable format
console.log(currentDate.getDate());
console.log(currentDate.getHours())
console.log(currentDate.getMinutes())
const epochTime = new Date(1970,0,1)
const secondsElapsed = Math.floor((currentDate-epochTime) / 1000)
console.log(secondsElapsed)

