const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let pos = input.slice(1,input.length-1);
pos = pos.reduce((prev,cur) => {
  prev.push(cur.split(' ').map(Number));
  return prev;
},[])
pos.sort((a,b) => {
    if (a[0] == b[0]) return a[1] - b[1]
    else return a[0] - b[0]
})

const result = pos.reduce((prev,cur) => {
  prev += cur.join(" ") +"\n";
  return prev
},"")
console.log(result);