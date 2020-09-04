function extractLanguage(locale) {
  return locale.split('_')[1].split('.')[0];
}

function greet(str) {
  switch (str) {
    case 'US': return 'Hey';
    case 'GB': return 'Hello';
    case 'AU': return 'Howdy';
  }
}

function localGreet(locale) {
  return greet(extractLanguage(locale));
}



console.log(localGreet('en_US.UTF-8')); 
console.log(localGreet('en_GB.UTF-8')); 
console.log(localGreet('en_AU.UTF-8')); 
