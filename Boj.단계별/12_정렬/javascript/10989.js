// 이 문제는 node.js 의 메모리 한계로 통과할 수 없음 ( 통과자 0명 ). 로직은 .py와 같다. 단 함수형으로 구현했다

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const nums = input.slice(1,input.length-1).reduce((nums,cur) => {
    nums.push(Number(cur));
    return nums;
},[])
nums.reduce((cnt,cur) => {
    cnt[cur] += 1;
    return cnt
},new Array(10001)).reduce((prev,cur) =>{
  while (cur--) console.log(prev);
  return prev+1;
},0)