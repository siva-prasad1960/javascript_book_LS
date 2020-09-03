let names = ['Siva', 'Radhika', 'Vishnu', 'Amma', 'Nana'];
//let index = 0;
let upperNames = [];

// while(index < names.length) {
//   let upperCaseNames = names[index].toUpperCase();
//   upperNames.push(upperCaseNames);
//   index += 1;
// }

for (let index = 0; index < names.length; index += 1) {
  if(names[index] === 'Siva') {
    continue;
  }

  let upperCaseNames = names[index].toUpperCase();
  upperNames.push(upperCaseNames);
}

console.log(upperNames);