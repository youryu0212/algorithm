const r = Number(require('fs').readFileSync('/dev/stdin'));
console.log(Math.PI*r*r);
console.log(2*r*r);