const n = Number(require('fs').readFileSync('/dev/stdin'));

const solution = (n) => {
    let target = 1000-n;
    return [500,100,50,10,5,1].reduce((answer,money)=>{
        if (target){
            answer += Math.floor(target/money);
            target -= Math.floor(target/money)*money;
        }
        return answer
    },0);
}

const answer = solution(n);
console.log(answer)