let number = 4936;

console.log('thousands place is ' + parseInt(number / 1000));

console.log('hundreds place is ' + parseInt(number % 1000 / 100));

console.log('tens place is ' + parseInt(number % 100 / 10));

console.log('ones place is ' + number % 10);

