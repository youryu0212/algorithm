const n = Number(require('fs').readFileSync('/dev/stdin'));
const dp = new Map();
dp.set(1,0);
dp.set(2,1);
dp.set(3,1);

const sol = (i) =>{
    if (dp.has(i)) return dp.get(i);
    dp.set(i,1 + Math.min(sol(Math.floor(i/2)) + i%2, sol(Math.floor(i/3)) + i%3));
    return dp.get(i);
}
console.log(sol(n));