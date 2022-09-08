const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let T = Number(input[0]);

const arr = input.slice(1);
let idx = 0;

const getDistance = (x,y,nx,ny) => {
    return Math.abs(nx-x) + Math.abs(ny-y);
}

const solution = () => {
    const n = Number(arr[idx++]);
    
    const pos = arr.slice(idx,idx+n+2).map(row=>row.split(" ").map(Number));
    const q = [pos[0]];
    const visited = Array(pos.length).fill(false);
    let answer = 'sad';
    visited[0] = true;

    let j = 0;
    idx += n+2;
    while (q.length > j){
        const [x,y] = q[j++];
        if (answer === 'happy'){
            return answer;
        }
        
        pos.forEach(([nx,ny],k)=>{
            if (visited[k]){
                return;
            }
            const distance = getDistance(x,y,nx,ny);
            if (distance>1000){
                return;
            }
            if (k === pos.length-1){
                answer = 'happy';
            }
            q.push([nx,ny]);
            visited[k] = true;
        })
    }
    return answer;
}

while (T--){
    const answer = solution();
    console.log(answer);
}