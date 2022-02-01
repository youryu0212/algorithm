const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const maxNum = Math.max(...arr);
const primeNumbers = new Array(maxNum+1);
let result = 0;
primeNumbers[0] = primeNumbers[1] = true;
for (let i = 2 ; i < parseInt(Math.sqrt(maxNum))+1 ; i++){
    j = 2;
    while (i*j <= maxNum){
        primeNumbers[i*j] = true;
        j++;
    }
}

for (let i = 0 ; i<arr.length ; i++){
    if (!primeNumbers[arr[i]]) result++;
}
console.log(result)