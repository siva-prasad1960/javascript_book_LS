let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];

arr.forEach(function (myArr) {
  myArr.forEach(function (str) {
    if(str === 'mem') {
      console.log(str);
    }
  });
});