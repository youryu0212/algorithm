const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));

let star = "";
for (let i = 0 ; i<n ; i++){
    star += '*';
    console.log(star);
}