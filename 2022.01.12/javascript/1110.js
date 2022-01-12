const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));

let check_cycle = function (n,target,cnt){
    let new_num;
    if (n<10){
        new_num = n;
    }
    else{ new_num = n%10 + parseInt(n/10) };
    n = Number(String(n%10) + String(new_num%10))
    
    if (n===target){
        return cnt
    }
    cnt = check_cycle(n,target,cnt+1);
    return cnt
}
console.log(check_cycle(n,n,1));