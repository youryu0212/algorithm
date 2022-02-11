const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arr = [];
for (let i = 1 ; i<input.length-1 ; i++){
    arr.push(input[i].split(' ').map(Number));
}
arr.sort((a,b) => {
    if (a[1] === b[1]) {
        return a[0]-b[0];
    }
    return a[1]-b[1];
})
let endTime = 0
let result = 0;
for (let i = 0 ; i<arr.length ; i++){
  if (endTime <= arr[i][0]) {
    result++;
    endTime = arr[i][1];
  }
}
console.log(result)