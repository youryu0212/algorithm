const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let result = '';
for (let i = 1 ; i<=Number(input[0]) ; i++){
    let num_list = input[i].split(' ');
    result += `Case #${i}: ${Number(num_list[0]) + Number(num_list[1])}\n`;
}
console.log(result);