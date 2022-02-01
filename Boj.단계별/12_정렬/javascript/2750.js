const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const nums = input.slice(1,input.length-1).reduce((acc,cur) => {acc.push(Number(cur)); return acc},[]);

const insertionSort = (arr) => {
  let len = arr.length;
  let keyNum;
  let cnt;
  for (let i = 1 ; i<len ; i++){
    keyNum = arr[i];
    idx = i-1;
    for (let j = i-1 ; j>=0; j--){
      if (keyNum<arr[j]) {
        arr[j+1] = arr[j];
        idx--;
      }else {
        break;
      }
    if (idx!== i-1) arr[idx+1] = keyNum;
    }
  }
  return arr;
}
insertionSort(nums);
nums.reduce((prev,cur) => console.log(cur),0)
