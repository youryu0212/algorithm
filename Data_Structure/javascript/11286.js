const Heapq = function () {
  this.data = [null];
  this.size = 0;
};

Heapq.prototype.swap = function (a, b) {
  [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
};
Heapq.prototype.heappush = function (item) {
  let childIdx = ++this.size;
  let parentIdx = ~~(childIdx / 2);
  this.data.push(item);
  while (parentIdx >= 1) {
    if (this.check(parentIdx, childIdx)) {
      this.swap(parentIdx, childIdx);
      [childIdx, parentIdx] = [parentIdx, ~~(parentIdx / 2)];
      continue;
    }
    return;
  }
};

Heapq.prototype.heappop = function () {
  if (this.size === 0) return 0;
  let parentIdx = 1;
  this.swap(parentIdx, this.size);
  while (true) {
    let childIdx = parentIdx * 2;
    if (childIdx + 1 < this.size && this.check(childIdx, childIdx + 1)) {
      childIdx += 1;
    }
    if (childIdx < this.size && this.check(parentIdx, childIdx)) {
      this.swap(parentIdx, childIdx);
      parentIdx = childIdx;
      continue;
    }
    this.size -= 1;
    return this.data.pop();
  }
};
Heapq.prototype.check = function (a, b) {
  const one = Math.abs(this.data[a]) > Math.abs(this.data[b]);
  const two = Math.abs(this.data[a]) === Math.abs(this.data[b]);
  const three = this.data[a] > this.data[b];
  return one || (two && three);
};

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let result = "";
const heap = new Heapq();
for (let i = 1; i < input.length - 1; i++) {
  if (input[i] !== 0) {
    heap.heappush(input[i]);
  } else {
    result += heap.heappop() + "\n";
  }
}

console.log(result);
