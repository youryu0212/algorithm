const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let cnt_arr = new Array(42).fill(0);
let result = 0;
for (let i = 0 ; i<input.length-1 ; i++){
    cnt_arr[Number(input[i])%42]++;
}
for (let i = 0 ;i<cnt_arr.length ; i++){
    if (cnt_arr[i]>0){
        result++;
    }
}
console.log(result);