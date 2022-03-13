const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

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
    if (this.data[parentIdx] < this.data[childIdx]) {
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
    if (childIdx + 1 < this.size && this.data[childIdx + 1] > this.data[childIdx]) {
      childIdx += 1;
    }
    if (childIdx < this.size && this.data[childIdx] > this.data[parentIdx]) {
      this.swap(parentIdx, childIdx);
      parentIdx = childIdx;
      continue;
    }
    this.size -= 1;
    return this.data.pop();
  }
};

const heap = new Heapq();
let result = "";
for (let i = 1; i < input.length - 1; i++) {
  const order = Number(input[i]);
  if (order === 0) result += heap.heappop() + "\n";
  else heap.heappush(order);
}
console.log(result);
