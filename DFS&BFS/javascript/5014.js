const [f, s, g, u, d] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const q = [];
let idx = 0;
let result = "use the stairs";
const visited = new Array(f + 1);
if (s !== g) {
  q.push([s, 0]);
} else {
  result = 0;
}
while (q.length > idx) {
  const [cur, cnt] = q[idx++];
  if (cur + u <= f) {
    if (visited[cur + u] === undefined) {
      visited[cur + u] = true;
      if (cur + u === g) {
        result = cnt + 1;
        break;
      }
      q.push([cur + u, cnt + 1]);
    }
  }
  if (cur - d >= 1) {
    if (visited[cur - d] === undefined) {
      visited[cur - d] = true;
      if (cur - d === g) {
        result = cnt + 1;
        break;
      }
      q.push([cur - d, cnt + 1]);
    }
  }
}
console.log(result);
