const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = input[0];
const b = input[1];
let result = 0;
let place_value = 1;

for (let i = b.length-1 ; i>=0 ; i--){
    let temp = 0;
    let digit = 1;
    for (let j = a.length-1 ; j>=0 ; j--){
        temp += Number(a[j])*Number(b[i])*digit;
        digit *= 10;
    }
    console.log(temp);
    result += temp*place_value;
    place_value *= 10;
}
console.log(result);