let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let obj = {};
obj[nestedArray[0][0]] = nestedArray[0][1];
obj[nestedArray[1][0]] = nestedArray[1][1];
obj[nestedArray[2][0]] = nestedArray[2][1];


console.log(obj);

