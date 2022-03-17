const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const q = [];
let idx = 0;

const visited = new Set();
const result = new Set();
let nx, ny, nz;
let str;

q.push([0, 0, c]);
visited.add([0, 0, c].join(","));
result.add(c);

const check = (str) => {
  if (visited.has(str)) return false;
  return true;
};
const addFnc = (x, y, z, str) => {
  visited.add(str);
  q.push([x, y, z]);
  if (x === 0) {
    result.add(z);
  }
};
while (q.length > idx) {
  const [x, y, z] = q[idx++];
  [nx, ny, nz] = [x - Math.min(x, b - y), y + Math.min(b - y, x), z];
  str = [nx, ny, nz].join(",");
  if (check(str)) addFnc(nx, ny, nz, str);
  [nx, ny, nz] = [x - Math.min(x, c - z), y, z + Math.min(c - z, x)];
  str = [nx, ny, nz].join(",");
  if (check(str)) addFnc(nx, ny, nz, str);
  [nx, ny, nz] = [x + Math.min(a - x, y), y - Math.min(a - x, y), z];
  str = [nx, ny, nz].join(",");
  if (check(str)) addFnc(nx, ny, nz, str);
  [nx, ny, nz] = [x, y - Math.min(c - z, y), z + Math.min(c - z, y)];
  str = [nx, ny, nz].join(",");
  if (check(str)) addFnc(nx, ny, nz, str);
  [nx, ny, nz] = [x + Math.min(a - x, z), y, z - Math.min(a - x, z)];
  str = [nx, ny, nz].join(",");
  if (check(str)) addFnc(nx, ny, nz, str);
  [nx, ny, nz] = [x, y + Math.min(b - y, z), z - Math.min(b - y, z)];
  str = [nx, ny, nz].join(",");
  if (check(str)) addFnc(nx, ny, nz, str);
}
console.log([...result].sort((a, b) => a - b).join(" "));
