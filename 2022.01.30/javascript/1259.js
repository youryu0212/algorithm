const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0 ; i<input.length-2; i++){
    let left= 0 ,right = input[i].length-1;
    result = "yes";
    while (left<right){
        if (input[i][left] !== input[i][right]) { result = "no"}
        left++;
        right--;
    }
    console.log(result);
}