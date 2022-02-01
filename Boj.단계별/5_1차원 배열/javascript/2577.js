const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = 1;
const cnt_arr = new Array(10).fill(0);
for (let i = 0 ; i<input.length-1 ; i++){
    result *= Number(input[i])
}
while (result){
    cnt_arr[result %10]++;
    result = parseInt(result/10);
}
for (let i = 0 ; i<cnt_arr.length; i++){
    console.log(cnt_arr[i]);
}
