let str = 'launch school tech & talk';

let capitalString = '';

function capitalizeWords(newStr) {
  let arr = newStr.split(' ');
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== '&') {
      capitalString += arr[i].replace(arr[i][0], arr[i][0].toUpperCase()) + ' ';
    } else {
      capitalString += arr[i] + ' ';
    }
  }
  return capitalString;

}

console.log(capitalizeWords(str));
