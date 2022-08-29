const [[,M],arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(row=>row.split(" ").map(Number));

arr.sort((a,b)=>a-b)
const search = (arr,M) => {
    const res = [];
    const generate = (cur) => {
        if (cur.length === M){
            res.push(cur.join(" "));
            return;
        }
        for (const num of arr){
            generate([...cur,num]);
        }
    }
    generate([]);
    return [...new Set(res)].join("\n")
}
const answer = search(arr,M);
console.log(answer)