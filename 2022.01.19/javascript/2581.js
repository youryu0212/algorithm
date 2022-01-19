const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const m = Number(input[0]);
const n = Number(input[1]);
const primeNumber = new Array(n+1);
let j, result = 0 , min_prime = 0;
primeNumber[0] = primeNumber[1] = true;
for (let i = 2 ; i<parseInt(Math.sqrt(n))+1 ; i++){
    j = 2;
    while (i*j <= n){
        primeNumber[i*j] = true;
        j++;
    }
}
for (let i = m ; i<= n ; i++){
    if (primeNumber[i]) continue;
    if (!min_prime) min_prime = i;
    result += i
}
if (result === 0) console.log(-1)
else{
    console.log(result);
    console.log(min_prime);
}