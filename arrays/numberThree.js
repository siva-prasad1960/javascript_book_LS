let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function numberThree(arr) {
  if(arr.filter(num => num === 3).includes(3)) {
    return true;
  } else {
    return false;
  }
}

console.log(numberThree(numbers1));
console.log(numberThree(numbers2));
console.group(numberThree(numbers3));

