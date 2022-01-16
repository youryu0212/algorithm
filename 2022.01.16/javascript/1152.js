const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(" ");
let result = input.length;
if (input[0] === ""){
  result--;
}
if (input[input.length-1] === "\n"){
  result --;
}
console.log(result);