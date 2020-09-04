function greet(str) {
  
  switch (str) {
    case 'en':
      console.log('Hi!');
      break;
    case 'fr':
      console.log('Salut!');
      break;
    case 'pt':
      console.log('ola!');
      break;
    case 'de':
      console.log('Hallo!');
      break;
    case 'sv':
      console.log('Heji!');
      break;
    case 'af':
      console.log('Haai!');
      break;
  }
}

greet('en');
greet('fr'); 
greet('pt'); 
greet('de'); 
greet('sv'); 
greet('af');