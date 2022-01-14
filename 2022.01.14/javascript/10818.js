const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const arr = input[1].split(' ');
let minNum = arr[0], maxNum = arr[0];
for (let i = 0 ; i<input[1].length ; i++){
    arr[i] = Number(arr[i]);
    if (arr[i]>maxNum){
        maxNum = arr[i]
    }
    if (arr[i]<minNum){
        minNum = arr[i]
    }
}
console.log(minNum,maxNum);