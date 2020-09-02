let rlSync = require('readline-sync');

function firstName() {
  return rlSync.question("What is your first name?\n");
}

function lastName() {
  return rlSync.question("What is your last name?\n");
}



//let firstName = rlSync.question("What is first your name?\n");
//let lastName = rlSync.question("What is your last name?\n");

//console.log(`Hello, ${firstName} ${lastName}!`)

console.log('Hello, ' + firstName() + ' ' +  lastName());
