const [n,k] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);

const fac = (n) => {
    if (n<=1) { return 1};
    return fac(n-1)*n;
}
const binomial_coefficient = (n,k) => {
    if ( k<0 || k>n) return 0;
    return fac(n) / (fac(k)*fac(n-k));
}
console.log(binomial_coefficient(n,k));