const nums = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number).slice(0, -1);

const dif = nums.reduce((acc, cur) => acc + cur) - 100;
const search = (dif) => {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (dic.hasOwnProperty(dif - num)) {
      return [dic[dif - num], i];
    }
    dic[num] = i;
  }
};

const idxArr = search(dif);
const result = nums
  .filter((_, idx) => !idxArr.includes(idx))
  .sort((a, b) => a - b)
  .join("\n");
console.log(result);
