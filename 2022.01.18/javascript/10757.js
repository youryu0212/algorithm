const fs = require('fs');
let max_len;
let a,b,carry;
let result = "";
let digit;
[a,b] = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split(' ');
max_len = Math.max(a.length,b.length);
while (a.length < max_len){
    a = "0"+a;
}
while (b.length < max_len){
    b = "0"+b;
}
carry = 0;
for (let i = max_len-1 ; i>=0 ; i--){
    digit = carry+Number(a[i])+Number(b[i])
    result = digit%10 + result;
    if (digit>=10) carry = 1;
    else carry = 0;
}
if (carry){
    result = "1" + result;
}
console.log(result)