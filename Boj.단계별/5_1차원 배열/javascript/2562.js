const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let maxNum = Number(input[0]);
let idx = 1 ;
for (let i = 1 ; i<input.length ; i++){
    input[i] = Number(input[i]);
    if (input[i] > maxNum){
        maxNum = input[i];
        idx = i+1;
    }
}
console.log(maxNum);
console.log(idx);