const [m,n] = require('fs').readFileSync('/dev/stdin').toString().split('\n')[0].split(' ').map(Number);
let prime = new Array(n+1).fill(true);
let j;
let result = "";
prime[0] = prime[1] = false;
for (let i = 2 ; i<parseInt(Math.sqrt(n))+1 ; i++){
    j = 2;
    while (i*j<=n){
        prime[i*j] = false;
        j++;
    }
}
for (let i = m ; i<=n ; i++){
    if (prime[i]) result += i+"\n"
}
console.log(result)