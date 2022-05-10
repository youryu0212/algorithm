const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const arr = [];
for (let i = 0; i < 4; i++) {
  arr.push(input[i].split("").map(Number));
}
const k = Number(input[4]);
const orders = [];

for (let i = 5; i < k + 5; i++) {
  const [targetIdx, direction] = input[i].split(" ").map(Number);
  orders.push([targetIdx - 1, direction]);
}

const rotateClockWise = (arr, idx) => {
  const popValue = arr[idx].pop();
  arr[idx] = [popValue, ...arr[idx]];
};

const rotateCounterClockWise = (arr, idx) => {
  const popLeftValue = arr[idx].shift();
  arr[idx].push(popLeftValue);
};

const solution = () => {
  const orderDictionary = {
    "-1": rotateCounterClockWise,
    1: rotateClockWise,
  };
  orders.forEach((order) => {
    const [targetIdx, direction] = order;
    const visited = new Set();
    rotate(orderDictionary, targetIdx, direction, visited);
  });
};

const rotate = (orderDictionary, targetIdx, direction, visited) => {
  visited.add(targetIdx);
  if (checkBtn(targetIdx, visited, "left")) {
    rotate(orderDictionary, targetIdx - 1, -direction, visited);
  }
  if (checkBtn(targetIdx, visited, "right")) {
    rotate(orderDictionary, targetIdx + 1, -direction, visited);
  }
  orderDictionary[direction](arr, targetIdx);
};

const checkBtn = (targetIdx, visited, d) => {
  const nextIdx = d === "left" ? targetIdx - 1 : targetIdx + 1;
  if (nextIdx < 0 || nextIdx > 3) {
    return false;
  }
  if (visited.has(nextIdx)) {
    return false;
  }
  if (d === "left") {
    return arr[nextIdx][2] !== arr[targetIdx][6];
  }
  return arr[nextIdx][6] !== arr[targetIdx][2];
};

const countPoint = () => {
  const point = arr.reduce((totalPoint, row, idx) => {
    const point = row[0] === 1 ? 2 ** idx : 0;
    return totalPoint + point;
  }, 0);
  return point;
};
solution();
console.log(countPoint());
