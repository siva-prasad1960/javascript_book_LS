let rlSync = require('readline-sync');

function multiply(num1, num2) {
  return num1 * num2;
}

let number1 = rlSync.question("Enter the first number:\n");
let number2 = rlSync.question("Enter the second number:\n");

console.log(`${number1} * ${number2} = ` + multiply(parseInt(number1), Number(number2)));



