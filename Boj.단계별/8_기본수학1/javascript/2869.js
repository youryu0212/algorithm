const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a,b,v;
[a,b,v] = [input[0],input[1],input[2]].map(Number);
let result = Math.ceil((v-a)/(a-b)) + 1;
console.log(result);