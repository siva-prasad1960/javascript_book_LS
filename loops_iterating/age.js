let rlSync = require('readline-sync');

let age = parseInt(rlSync.question("How old are you?\n"));

age = parseInt(age);

console.log(`You are ${age} years old.`);
for (let index = 10; index < 50; index += 10) {
  console.log(`In ${index} years, you will be ${age + index} years old.`)
}