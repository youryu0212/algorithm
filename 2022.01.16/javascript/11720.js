const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = 0;
let num = input[1];
for (let i = 0 ;i<Number(input[0]) ; i++){
  result += parseInt(num[i]);
}

console.log(result);