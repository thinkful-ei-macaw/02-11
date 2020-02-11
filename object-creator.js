'use strict';

function createMyObject(foo, answerToUniverse, word3) {
  return {
    foo,
    answerToUniverse,
    'olly olly': word3,
    sayHello: (function() {
      return "hello";
    })()
  }
}

const result = createMyObject('bar', 42, 'oxen free');
console.log(result);

