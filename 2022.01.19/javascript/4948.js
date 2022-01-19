const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let prime = new Array(123456*2+1).fill(true);
prime[0] = prime[1] = false;
for (let i = 2,j ; i< parseInt(Math.sqrt(123456*2))+1 ; i++){
    j = 2;
    while (i*j<=123456*2){
        prime[i*j] = false;
        j++;
    }
}
for (let i = 0,n,cnt=0 ; i<input.length ; i++,cnt=0){
    if (input[i] == 0) break;
    n = Number(input[i])
    for (let j = n+1 ; j<=2*n ; j++){
        if (prime[j]) cnt++;
    }
    console.log(cnt);
}