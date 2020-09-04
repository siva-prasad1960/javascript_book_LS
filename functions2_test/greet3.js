function greet() {
  return greeting() + ', ' + recipient() + '!';
}

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

console.log(greet());                                
