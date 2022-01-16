const words = ["c=","c-","dz=","d-","lj","nj","s=","z="];
const fs = require('fs');
let s = fs.readFileSync('/dev/stdin').toString().split('\n')[0];

let cnt = 0;
for (let i = 0 ; i<words.length ; i++){
  s = s.split(words[i]).join("0");
}

console.log(s.length);