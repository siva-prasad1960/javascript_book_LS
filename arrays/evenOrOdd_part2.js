let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArray = [];

myArray.forEach(function (num) {
  if(num % 2 === 0) {
   newArray.push('even');
  } else {
    newArray.push('odd');
  }
})

console.log(newArray);