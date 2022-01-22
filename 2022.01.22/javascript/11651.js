const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
console.log(input.slice(1,input.length-1).reduce((acc,cur) => {
    acc.push(cur.split(' ').map(Number));
    return acc;
},[]).sort((a,b) => {
    if (a[1] === b[1]) return a[0]-b[0];
    else return a[1]-b[1];
}).reduce((prev,cur) => {prev += cur.join(" ") +"\n"; return prev},""))