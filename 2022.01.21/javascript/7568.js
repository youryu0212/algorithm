const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const bulk = [];
for (let i = 1 ; i<input.length -1 ; i++){
    bulk.push(input[i].split(' ').map(Number));
}
let result = "";
bulk.reduce((a,b) => { 
    let rank = 1;
    bulk.reduce((c,d) => {
        if (d[0] > b[0] && d[1] > b[1]) rank++;
        return d;
    },0);
    result += `${rank} `;
    return b;},0);
console.log(result)