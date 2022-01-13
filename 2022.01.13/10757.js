const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let A = input[0];
let B = input[1];

let result = [];
for ( let i = 0 ; i<10001 ; i++){
    result.push(0);
}
let digit = 0;
let a_idx = Number(A.length)-1;
let b_idx = Number(B.length)-2;

let x = 0;
let y = 0;
let temp = 0;

while (a_idx >= 0 || b_idx >= 0){
    x = 0;
    y = 0;
    if (a_idx >= 0){
        x = parseInt(A[a_idx]);
    }
    if (b_idx >=0){
        y = parseInt(B[b_idx]);
    }
    temp = result[digit] + x + y;
    result[digit] = temp%10;
    result[digit+1] = parseInt(temp/10);
    digit++;
    a_idx--;
    b_idx--;
}
if (result[digit] == 0){
    digit -= 1;
}
let answer = '';
while (digit >=0 ){
    answer += result[digit--];
}
console.log(answer);