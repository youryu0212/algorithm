const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const n = Number(input[0])
const arr = input[1].split(' ');
const MAX_NUM = Math.max(...arr);
let result = 0;
for (let i = 0 ; i<n ; i++){
    result += Number(arr[i])/MAX_NUM * 100;
}
console.log(result/n);