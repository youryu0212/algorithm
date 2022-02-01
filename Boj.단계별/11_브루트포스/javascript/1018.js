const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);
const board = input.slice(1,input.length-1);
const checkBoardChange = (pattern,cnt,r,c) => {
    for (let i = 0 ; i<8 ; i++){
        for (let j = 0 ; j<8 ; j++){
            if ((i+j)%2 == 0 && board[r+i][c+j] != pattern) cnt++;
            if ((i+j)%2 != 0 && board[r+i][c+j] == pattern) cnt++;
        }
    }
    return cnt
}
let result = 10**18*9, one, two;
const patterns = new Map();
patterns.set("W","B");
patterns.set("B","W");
for (let i = 0 ; i<n-7 ; i++){
    for (let j = 0 ; j<m-7 ; j++){
        one = checkBoardChange(board[i][j],0,i,j);
        two = checkBoardChange(patterns.get(board[i][j]),0,i,j);
        result = Math.min(one,two,result);
    }
}
console.log(result)