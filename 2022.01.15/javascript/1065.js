const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));
let cnt = 0;
let solution = function(n){
    if (n<100){
        return true;
    }
    let prev = n%10;
    n = parseInt(n/10);
    let dif = prev-n%10;
    while (n){
        if ((prev-n%10) !== dif){
            return false;
        }
        prev = n%10;
        n = parseInt(n/10);
    }
    return true;
}
for (let i = 1; i<=n ; i++){
    if(solution(i)){
        cnt++;
    }
}
console.log(cnt);