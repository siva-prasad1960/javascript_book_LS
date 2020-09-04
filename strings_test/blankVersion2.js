function isBlank(str) {
  if (str.length === 0 || str.includes(' ')) {
    return true;
  } else {
    return false;
  }
}

console.log(isBlank('mars')); 
console.log(isBlank('   '));
console.log(isBlank('')); 

