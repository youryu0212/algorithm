const n = Number(require('fs').readFileSync('/dev/stdin'));
const factorial = (n)=>{
    if (n<=1) return 1
    return n*factorial(n-1);
}
console.log(factorial(n));