let rlSync = require('readline-sync');

let firstName = rlSync.question("What is first your name?\n");
let lastName = rlSync.question("What is your last name?\n");

console.log(`Hello, ${firstName} ${lastName}!`)
