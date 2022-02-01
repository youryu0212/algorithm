const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0]);
const prime = new Array(10001).fill(true);

for (let i = 2,j ; i<parseInt(Math.sqrt(10000))+1 ; i++){
    j = 2;
    while (i*j <= 10000){
        prime[i*j] = false;
        j++;
    }
}
for (let i = 1,n,a,b ; i<input.length-1 ; i++){
    n = Number(input[i]);
    a = parseInt(n/2);
    for ( ; a>=2 ; a--){
        b = n - a;
        if (prime[a] && prime[b]) break
    }
    console.log(a,b)
}