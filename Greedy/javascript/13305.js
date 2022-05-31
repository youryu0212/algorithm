const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const distances = input[1].split(" ").map(BigInt);

const costs = input[2].split(" ").map(BigInt).slice(0, -1);

const answer = costs
  .reduce(
    (answer, cost, idx) => {
      if (answer.minCost > cost) {
        answer.minCost = cost;
      }
      answer.totalCost += answer.minCost * distances[idx];
      return answer;
    },
    { minCost: BigInt(10 ** 18 * 9), totalCost: BigInt(0) }
  )
  .totalCost.toString();

console.log(answer);
