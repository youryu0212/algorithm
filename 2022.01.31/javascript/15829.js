const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')[1];
let result = 0;
for (let i = 0 ; i<input.length ; i++){
  char = input[i];
  result += ( (char.charCodeAt() - "a".charCodeAt() + 1) % 124567891 * (31**i)% 1234567891 );
}
console.log(result%1234567891);