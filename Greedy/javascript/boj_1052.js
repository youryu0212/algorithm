const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let n = Number(input[0]);
let k = Number(input[1]);
function dec2bin(num){
    let arr = [];
    while (num>0){
        arr.push(num%2);
        num = parseInt(num/2);
    }
    return arr
}

function bin2dec(arr){
    let exp = 1;
    let value = 0;
    let carry;
    for (let i = 0 ; i< arr.length ; i++){
        if (arr[i] != 2){
            value += arr[i] * exp;
        }
        if (arr[i] >= 1){
            arr[i] = 0;
            if ( i+1 < arr.length ){
                arr[i+1] += 1;
            }
            else{
                carry = 1;
            }
        }
        exp *= 2;
    }
    return value
}

function cut_arr_fnc(arr,target){
    let cnt = 0;
    let new_arr = [];
    for ( let i = arr.length -1 ; i>=0 ; i--){
        if (arr[i] == 1){
            cnt += 1
            if (cnt == target){
                for (let j = 0 ; j<i ; j++){
                    new_arr.push(arr[j]);
                }
                return new_arr
            }
        }
    }
    return [0]
}

if (n<=k){
    console.log(0);
}
else{
    let bin_arr = dec2bin(n);
    let answer = 0;
    bin_arr = cut_arr_fnc(bin_arr,k);
    answer = bin2dec(bin_arr);
    console.log(answer);
}
