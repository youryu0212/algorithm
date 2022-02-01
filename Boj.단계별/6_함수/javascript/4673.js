let visited = new Array(10001).fill(false);
let next_num = 0;
let d = function (n){
    let num = n;
    while (n){
        num += n%10;
        n = parseInt(n/10);
    }
    return num;
}
for (let i = 0 ; i<visited.length ; i++){
    next_num = d(i);
    if (next_num>10000 || visited[next_num]){
        continue;
    }
    visited[next_num] = true;
}
for (let i = 1 ; i<visited.length ; i++){
    if (!visited[i]){
        console.log(i);
    }
}