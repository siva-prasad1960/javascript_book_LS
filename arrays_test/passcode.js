let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];


//console.log(passcode.map(str => str + "-"));

let newPasscode = " ";

passcode.forEach(function (str) {
  if(passcode[passcode.length - 1] !== str) {
    newPasscode = newPasscode + str + "-";
  } else {
    newPasscode = newPasscode + str;
  }
});

console.log(newPasscode);