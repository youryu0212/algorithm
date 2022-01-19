const [x,y,w,h] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(" ").map(Number);
console.log(Math.min(x,y,w-x,h-y));