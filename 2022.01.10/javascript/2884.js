const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let h = parseInt(input[0]);
let m = parseInt(input[1]);

if (m<45){
    h--;
    m += 15;
}
else{
    m -= 45;
}
if (h<0){
    h = 23;
}
console.log(h,m);