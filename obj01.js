'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water / this.flour) * 100;
  }
}

console.log(loaf);
console.log(loaf.hydration());


const obj = {
  foo: 'chocolate',
  bar: 'wood',
  fum: 'fie',
  quux: 'fluxx',
  spam: 'gross'
}

for (const key in obj) {
  console.log(`${key}:${obj[key]}`);
  console.log(`${key}:${obj.key}`);
}

