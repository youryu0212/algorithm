const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let c,n,point;
let total;
let average;
let cnt;
c = parseInt(input[0]);
for (let i = 1 ; i<input.length-1 ; i++){
    input[i] = input[i].split(' ');
    n = Number(input[i][0]);
    total = 0;
    average = 0;
    cnt = 0;
    for (let j = 1 ; j<input[i].length ; j++){
        total += parseInt(input[i][j]);
    }
    average = total / n;
    for (let j = 1 ; j<input[i].length ; j++){
        if (average < Number(input[i][j])){
            cnt += 1
        };
    };
    console.log(`${((cnt/n)*100).toFixed(3)}%`);
}