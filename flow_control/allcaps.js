function stringToAllCaps(text) {
  if(text.length > 10) {
    return text.toUpperCase();
  } else {
    return text;
  }
}

console.log(stringToAllCaps('hello world'));
console.log(stringToAllCaps('goodbbye'));