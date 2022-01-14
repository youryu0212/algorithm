const fs= require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

T = Number(input[0]);
for (let i = 1 ; i<=T ; i++){
    let result = 0;
    let point = 1;
    let cur;
    for (let j = 0 ; j<input[i].length ; j++){
        cur = input[i][j];
        if (cur === "X"){
            point = 1;
            continue;
        }
        result += point++;
    }
    console.log(result);
}