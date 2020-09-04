function isBlank(str) {
  if (str.length !== 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isBlank('mars')); 
console.log(isBlank('  '));
console.log(isBlank('')); 