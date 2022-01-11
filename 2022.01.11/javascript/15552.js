const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0]);
let result = '';
for (let i = 1 ; i<= cnt ; i++){
    let num = input[i].split(' ');
    result += Number(num[0])+Number(num[1])+"\n";
}
console.log(result);