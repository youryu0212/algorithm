let n = Number(require('fs').readFileSync('/dev/stdin'));
for (let i = 2 ; i<=n ; i++){
    if (n === 0) break;
    while (n%i === 0){
        console.log(i);
        n /= i;
    }
}