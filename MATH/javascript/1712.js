const fs = require('fs');
const [a,b,v] = fs.readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);
if (v-b <= 0) result = -1;
else result = Math.floor(a/(v-b))+1
console.log(result)