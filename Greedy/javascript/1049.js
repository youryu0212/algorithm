const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [cnt,_] = input[0].split(' ').map(Number);
let [setPrice, piece] = [Infinity,Infinity];
input.slice(1).map((row)=>row.split(' ').map(Number)).map(([a,b])=>{
    setPrice = Math.min(setPrice,a);
    piece = Math.min(piece,b);
})

let answer = 0;

if (piece*6 >= setPrice){
    const setCnt = Math.floor(cnt/6)
    answer += setPrice * setCnt;
    cnt -= setCnt*6;
    if (cnt){
        answer += cnt*piece > setPrice ? setPrice : cnt*piece;
    }
}
else{
    answer += cnt*piece;
}

console.log(answer);