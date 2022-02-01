const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
let T = parseInt(input[0]);
let n,k;
let nums;
for (let i = 1 ; i<input.length-1 ; i+=2){
    [k,n] = [input[i],input[i+1]].map(Number);
    nums = new Array(n+1).fill(0);
    for (let j = 1 ; j<n+1 ; j++){
        nums[j] = j;
    }
    for (let r = 1 ; r<=k ; r++){
        for (let c = 1 ; c <=n ; c++){
            nums[c] += nums[c-1]
        }
    }
    console.log(nums[n]);
}