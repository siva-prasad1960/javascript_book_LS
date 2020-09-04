
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];


for (let outerLoopIndex = 0; outerLoopIndex < vocabulary.length; outerLoopIndex++) {
  for (let innerLoopIndex = 0; innerLoopIndex < vocabulary[outerLoopIndex].length; innerLoopIndex++) {
    console.log(vocabulary[outerLoopIndex][innerLoopIndex]);
  }
}