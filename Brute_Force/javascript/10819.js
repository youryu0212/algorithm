const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const cal = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    total += Math.abs(arr[i] - arr[i + 1]);
  }
  return total;
};
const permutation = (nums, r) => {
  const visited = new Array(n).fill(false);
  const selected = [];
  const generate = (arr, result) => {
    if (arr.length === r) {
      return cal(arr);
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr.push(nums[i]);
      result = Math.max(result, generate(arr, result));
      arr.pop();
      visited[i] = false;
    }
    return result;
  };
  return generate(selected, 0);
};
console.log(permutation(nums, n));
