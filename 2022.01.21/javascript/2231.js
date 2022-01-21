const n = Number(require('fs').readFileSync('/dev/stdin'));
let num,madeSum, result = 0;

for (let i = 1 ; i<=n ; i++){
    madeSum = num = i;
    while (num){
        madeSum += num%10;
        num = parseInt(num/10);
    }
    if ( madeSum == n ) {
        result = i;
        break;
    }
}
console.log(result)