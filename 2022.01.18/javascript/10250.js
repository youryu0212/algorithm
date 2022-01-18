const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input[0]);

let h,w,n;
let x,y;

for (let i = 1 ; i<input.length-1 ; i++){
    input[i] = input[i].split(' ');
    [h,w,n] = [input[i][0],input[i][1],input[i][2]].map(Number);
    if (parseInt(n/h) === n/h) x = n/h;
    else x = 1+ parseInt(n/h);
    y = n%h;
    if (y===0) y=h;
    if (x<10) x = "0"+x;
    console.log(`${y}${x}`);
}