const n = Number(require('fs').readFileSync('/dev/stdin'));
let fib = (n) => {
    if ( n<=1) return n
    return fib(n-1) + fib(n-2);
}
console.log(fib(n));