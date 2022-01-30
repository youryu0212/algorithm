const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);
let as = des = true;
let result = "mixed";
for (let i = 1 ; i<input.length ; i++){
    if (!des && !as) break;
    if (input[i]>input[i-1]) des = false;
    if (input[i]<input[i-1]) as = false;
}
if (as) result = "ascending";
if (des) result = "descending"
console.log(result);