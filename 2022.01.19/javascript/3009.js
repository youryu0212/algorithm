const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let x = [];
let y = [];

let a,b;
for (let i = 0 ; i<input.length-1 ; i++){
    [a,b] = input[i].split(' ').map(Number)
    x.push(a);
    y.push(b);
}

x = x[0] !== x[1] ? x[0] !== x[2] ? x[0] : x[1] : x[2];
y = y[0] !== y[1] ? y[0] !== y[2] ? y[0] : y[1] : y[2];
console.log(x,y);