let dial = new Map();
for (let i = 0 ; i<15 ; i++){
  dial.set(String.fromCharCode("A".charCodeAt(0)+i),parseInt(i/3)+3);
}
for (let i = 15 ; i <19 ; i++){
  dial.set(String.fromCharCode("A".charCodeAt(0)+i),8);
}
for (let i = 19 ; i<22 ; i++){
  dial.set(String.fromCharCode("A".charCodeAt(0)+i),9);
}
for (let i = 22 ; i<26 ; i++){
  dial.set(String.fromCharCode("A".charCodeAt(0)+i),10);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')[0];
let result = 0;
for (let i = 0 ; i<input.length ; i++){
  result += dial.get(input[i]);
}
console.log(result);
