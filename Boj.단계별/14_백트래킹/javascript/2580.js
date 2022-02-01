let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let target = [];
let checkBool;
const isEmptyArray = (arr) => {
    if (Array.isArray(arr) && arr.length === 0){
        return true;
    }
    return false;
}
for (let i = 0 ; i<9 ; i++){
  input[i] = input[i].split(' ').map(Number);
}

const check = (r,c,num) => {
    for (let i = 0 ; i<9 ; i++){
        if (input[r][i] === num) return false;
        if (input[i][c] === num) return false;
    }
    let [x,y] = [Math.floor(r/3)*3, Math.floor(c/3)*3];
    for (let i = 0 ; i<3 ; i++){
        for (let j = 0 ; j<3 ; j++){
            if( input[x+i][y+j] === num) return false;
        }
    }
    return true;
}
const solution = (cnt) => {
    if (cnt == target.length){
        for (let i = 0 ; i<9 ; i++){
            console.log(input[i].join(" "));
        }
        checkBool = true;
        return false;
    }
    let [r,c] = [target[cnt][0],target[cnt][1]];
    for (let i = 1 ; i<=9 ; i++){
        if (checkBool){
            return false;
        }
        if (check(r,c,i)){
            input[r][c] = i;
            solution(cnt+1);
            input[r][c] = 0;
        }
    }
    
}
for (let i = 0 ;i<9 ;i++){
    for (let j = 0 ; j<9 ; j++){
        if (input[i][j] == 0){
            target.push([i,j])
        }
    }
}
solution(0);