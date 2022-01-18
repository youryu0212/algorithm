const fs = require('fs');
let n = parseInt(fs.readFileSync('/dev/stdin'));

let cnt = 1;
let num = 6;
while ( n > 1){
    n -= num;
    cnt++;
    num += 6;
}
console.log(cnt)