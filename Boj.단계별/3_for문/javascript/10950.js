const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1 ; i<=Number(input[0]) ; i++){
    let num_arr = input[i].split(' ');
    console.log(Number(num_arr[0]) + Number(num_arr[1]));
}