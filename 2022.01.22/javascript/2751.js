const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const nums = input.slice(1,input.length-1).reduce((acc,cur) => {acc.push(Number(cur)) ; return acc},[]);

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  let left,right;
  left = mergeSort(arr.slice(0,mid));
  right = mergeSort(arr.slice(mid,arr.length));
  let i = j = k = 0;
  while ( i< left.length && j<right.length){
      if (left[i] <= right[j]) arr[k++] = left[i++];
      else arr[k++] = right[j++];
  }
  while ( i< left.length) arr[k++] = left[i++];
  while ( j< right.length) arr[k++] = right[j++];
  return arr;
}


mergeSort(nums);
result = nums.reduce((prev,cur) => {
    prev += (cur+"\n");
    return prev;
},"");
console.log(result)