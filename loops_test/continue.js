let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for(let citiesIndex = 0; citiesIndex < cities.length; citiesIndex++ ) {
  if(cities[citiesIndex] === null ) {
    continue;
  }
  
  console.log(cities[citiesIndex].length);
  
}