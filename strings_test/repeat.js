
function repeat(number, str) {
  let newStr = '';
  for(let i = 1; i <= number; i++) {
    newStr += str;
  }
  return newStr;
}

console.log(repeat(3, 'ha'));

