function evenOrOdd(number) {
  if(number % 2 === 0 && Number.isInteger(number)) {
    console.log('even');
  } else if (number % 2 != 0 && Number.isInteger(number)) {
    console.log('odd');
  } else {
    console.log("Not a number");
  }
}

evenOrOdd(2);
evenOrOdd(3);
evenOrOdd('S');