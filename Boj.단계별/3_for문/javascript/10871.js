const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input_num = input[0].split(' ');
let arr = input[1].split(' ');
let n = Number(input_num[0]);
let x = Number(input_num[1]);
let result = '';
for (let i = 0 ; i<n ; i++){
    if ( Number(arr[i]) < x ){
        result += `${arr[i]} `;
    }
}
console.log(result);