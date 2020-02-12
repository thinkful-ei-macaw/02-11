'use strict';

///////////////////////////////////
// 6. Cracking the code
///////////////////////////////////

// from https://courses.thinkful.com/ei-js-v1/checkpoint/10

function decode(word) {
  const cipher = {
    'a': word.charAt(1),
    'b': word.charAt(2),
    'c': word.charAt(3),
    'd': word.charAt(4)
    // *Q?* 
    // what about handling instances of f—z: ' ' 
    // so it doesn't return 'undefined'? 
    // probably requires a RegExp... but we haven't learned that yet. Hmm.
  };

  for (const key in cipher) {
    if (key === word[0]){
      console.log(cipher[key]);
      return cipher[key];
    } 
  }
}


// return decoded message

/* 
// v1
const message = 'craft block argon meter bells brown croon droop';
const words = message.split(' ');
// console.log(words);
words.forEach( word => console.log(decode(word)));
*/

// v2
function decodeWords(msg) {
  let result = [];
  const words = msg.split(' '); 
  for (let i = 0; i < words.length; i++) {
    result.push(decode(words[i]));
  }
  console.log(result.join(''));
}

const message = 'craft block argon meter bells brown croon droop';
decodeWords(message);
