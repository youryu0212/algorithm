const n = Number(require('fs').readFileSync('/dev/stdin'));
let cnt = 0;
let numStr = "666";
while (true){
    if (numStr.search("666") >= 0){
        cnt++;
    }
    if (cnt === n){
        break;
    }
    numStr = String(Number(numStr)+1);
}
console.log(numStr);