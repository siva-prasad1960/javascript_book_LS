let numbers = [3, 5, 7];

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

console.log(sumOfSquares(numbers));