const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = "";
for (let i = 0 ; i<input.length ; i++){
    let a,b;
    [a,b] = input[i].split(" ");
    if (!a || !b){
        break;
    }
    console.log(Number(a)+Number(b));
}