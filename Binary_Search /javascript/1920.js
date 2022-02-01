const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let [nArr,mArr] = [input[1].split(' ').map(Number).sort((a,b)=>a-b),input[3].split(' ').map(Number)];

const search = (minIdx,maxIdx) =>{
    if (minIdx > maxIdx) return 0
    const halfIdx = minIdx + Math.floor((maxIdx-minIdx) /2);
    if (nArr[halfIdx]> mArr[idx]){
      result = search(minIdx,halfIdx-1);
    }
    else if (nArr[halfIdx] === mArr[idx]){
      return 1;
    }
    else{
      result = search(halfIdx+1,maxIdx);
    }
    return result;
}
let idx = -1;
console.log((mArr.reduce((acc,cur) => {idx++; acc.push(search(0,nArr.length-1)); return acc} ,[])).join("\n"));
