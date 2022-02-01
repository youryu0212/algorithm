const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0,a,b,c ;i<input.length-1 ; i++){
    if (input[i] == "0 0 0") break;
    [a,b,c] = input[i].split(' ').map(Number).sort((a,b) => {return a-b});
    console.log(a*a + b*b === c*c ? "right" : "wrong");
}