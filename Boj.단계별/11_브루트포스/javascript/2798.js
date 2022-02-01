const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n,m] = input[0].split(' ').map((a) => {return Number(a)});
const nums = input[1].split(' ').map(Number);
let num, result = 0;
for (let i = 0 ; i<nums.length-2 ; i++){
    for (let j = i+1 ; j<nums.length-1 ; j++){
        for (let k = j+1 ; k < nums.length ; k++){
            num = nums[i]+nums[j]+nums[k];
            if (m>=num && num>result) result = num;
            if (result == m) break;
        }
        if (result == m) break;
    }
    if (result == m) break;
}
console.log(result)