'use strict';

function average (num) {
  let total = 0;
  num.forEach(element => total += num.element );

  return total / num.length;

}


// test num
let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(average(numList));