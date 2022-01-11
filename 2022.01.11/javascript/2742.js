const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));
result = '';
for ( let i = n ; i>0 ; i--){
    result += i+'\n';
}
console.log(result);