const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input[0]);

let r,s,result;
let i = 0;

while (T--){
  result = "";
  [r, s] = input[++i].split(' ');
  for (let i = 0 ; i<s.length ; i++){
    for (let j = 0 ; j<parseInt(r); j++){
      result += s[i]
    }
  }
  console.log(result);
}