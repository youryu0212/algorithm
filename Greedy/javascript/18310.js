const input = () => {
  const [[N], houses] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")
    .map((input) =>
      input
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b)
    );
  return [N, houses];
};

const solution = (N, houses) => {
  const answer = { dis: Infinity, pos: -1 };
  let [distance, prevPos] = [houses.reduce((acc, house) => acc + house, 0), 0];
  for (const [idx, pos] of houses.entries()) {
    const posDiff = pos - prevPos;
    prevPos = pos;
    distance += posDiff * (2 * idx - N);

    if (answer.dis > distance) {
      answer.dis = distance;
      answer.pos = pos;
    }
  }
  return answer.pos;
};

const [N, houses] = input();
const answer = solution(N, houses);
console.log(answer);
