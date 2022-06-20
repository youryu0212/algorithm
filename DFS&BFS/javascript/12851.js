const [n, k] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

const checkCondition = (pos, visited) => {
  return pos >= 0 && pos <= 100000 && !visited[pos];
};

const solution = (n, k) => {
  const q = [];
  const visited = new Array(100002).fill(false);
  const answer = [0, 0];
  let idx = 0;
  q.push([n, 0]);

  if (n > k) {
    return [n - k, 1].join("\n");
  }

  while (q.length > idx) {
    const [pos, cnt] = q[idx++];
    visited[pos] = true;

    if (answer[0] !== 0 && cnt > answer[0]) {
      break;
    }
    if (pos === k) {
      answer[0] = cnt;
      answer[1]++;
    }

    if (checkCondition(pos - 1, visited)) {
      q.push([pos - 1, cnt + 1]);
    }

    if (checkCondition(pos + 1, visited)) {
      q.push([pos + 1, cnt + 1]);
    }

    if (checkCondition(pos * 2, visited)) {
      q.push([pos * 2, cnt + 1]);
    }
  }
  return answer.join("\n");
};

const answer = solution(n, k);
console.log(answer);
