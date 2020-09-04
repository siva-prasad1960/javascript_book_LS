let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let newArray = [];

array.filter(function (num) {
  if(Number.isInteger(num)) {
    newArray.push(num);
  }
});

console.log(newArray);