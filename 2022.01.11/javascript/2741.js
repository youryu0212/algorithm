const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));
result = '';
for ( let i = 1 ; i<=n ; i++){
    result += i+'\n';
}
console.log(result);