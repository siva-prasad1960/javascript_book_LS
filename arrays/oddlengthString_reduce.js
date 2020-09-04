let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

//console.log(arr.filter(str => str.length % 2 !== 0).map(str => str.length));



function oddLengths(arr) {
  return arr.reduce((accumulator, str) => {
    if(str.length % 2 === 1) {
      accumulator.push(str.length);
    } 
    
    return accumulator;
  }, []);
}



console.log(oddLengths(arr));
