const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = "";
for (let i = 0 ; i<input.length ; i++){
    let a,b;
    [a,b] = input[i].split(" ");
    if (a=="0" && b==="0"){
        break;
    }
    result += Number(a)+Number(b)+"\n";
}
console.log(result);