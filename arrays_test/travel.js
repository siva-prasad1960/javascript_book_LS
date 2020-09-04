let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];



function contains(name, myArray) {
  for(let citiesIndex = 0; citiesIndex <= myArray.length; citiesIndex++) {
    if(name === myArray[citiesIndex]) {
      return true;
    }
  }
  return false;  
}

//contains('Barcelona', destinations);
let value = contains('Hyderabad', destinations);
console.log(value);

let value1 = contains('London', destinations);
console.log(value1);


