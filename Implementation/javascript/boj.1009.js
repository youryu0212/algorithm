const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
T = Number(input[0]);

const data = [
    [10,10,10,10],
    [1,1,1,1],
    [2, 4, 8 ,6],
    [3,9,7,1],
    [4,6,4,6],
    [5,5,5,5],
    [6,6,6,6],
    [7,9,3,1],
    [8,4,2,6],
    [9,1,9,1]
]


for ( let i = 1 ; i<T+1 ; i++){
    arr = input[i].split(' ');
    a = Number(arr[0]);
    b = Number(arr[1]) -1 ;
    if (b<0){
        b = 3;
    }
    console.log(data[a%10][(b%4)]);
}