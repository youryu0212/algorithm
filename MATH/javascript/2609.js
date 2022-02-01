const [a,b] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

const gcd = (a,b) => {
    if (b === 0) return a;
    return gcd(b,a%b);
}
const g= gcd(a,b)
console.log(g);
console.log((a*b)/g);
