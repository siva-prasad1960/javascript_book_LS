let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

console.log(arr.filter(str => str.length % 2 !== 0).map(str => str.length));

