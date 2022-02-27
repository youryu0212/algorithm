const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = input[1].split(' ').map(Number);
const arrTwo = input[2].split(' ').map(Number);
let result = [];
let left = 0, right = 0;

while (left<arr.length && right<arrTwo.length){
    if (arr[left]<=arrTwo[right]){
        result.push(arr[left++]);
    }
    else{
        result.push(arrTwo[right++]);
    }
}
while (left<arr.length){
    result.push(arr[left++]);
}
while (right<arrTwo.length){
    result.push(arrTwo[right++]);
}
console.log(result.join(" "));