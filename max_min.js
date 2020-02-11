'use strict';
function max(numbers) {
  let maxNumber = numbers[0];
  let i = 0;
  while ( i < numbers.length) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i++;
  }
  return maxNumber;
}
console.log(max([2, 4, 8]));
  
function min(numbers) {
  let minNumber = numbers[0];
  let i = 0;
  while ( i < numbers.length) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
    i++;
  }
  return minNumber;
}
console.log(min([2, 4, 8]));