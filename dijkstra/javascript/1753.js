const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const INF = 10 ** 9 * 8;

class MinHeapq {
  constructor() {
    this.heap = [null];
    this.size = 0;
  }
  heapPush(item) {
    this.heap.push(item);
    let idx = ++this.size;
    if (this.size === 1) {
      return;
    }
    let parentIdx = ~~(idx / 2);
    while (parentIdx >= 1 && this.heap[idx][0] < this.heap[parentIdx][0]) {
      this.swap(idx, parentIdx);
      [idx, parentIdx] = [parentIdx, ~~(parentIdx / 2)];
    }
  }
  swap(aIdx, bIdx) {
    [this.heap[aIdx], this.heap[bIdx]] = [this.heap[bIdx], this.heap[aIdx]];
  }
  heapPop() {
    if (this.size === 0) {
      return 0;
    }
    this.swap(1, this.size);
    const returnValue = this.heap.pop();
    this.size--;
    if (this.size === 0) {
      return returnValue;
    }
    let parentIdx = 1;
    let childIdx = 2;
    while (childIdx <= this.size) {
      if (childIdx + 1 <= this.size && this.heap[childIdx + 1][0] < this.heap[childIdx][0]) {
        childIdx++;
      }
      if (this.heap[parentIdx][0] <= this.heap[childIdx][0]) {
        return returnValue;
      }
      this.swap(parentIdx, childIdx);
      [parentIdx, childIdx] = [childIdx, childIdx * 2];
    }
    return returnValue;
  }
}

const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const arr = Array.from(Array(V + 1), () => new Array());
const costs = new Array(V + 1).fill(INF);
const visited = new Array(V + 1).fill(false);
const costCheckObj = Array.from(Array(V + 1), () => new Map());
for (let i = 2; i < E + 2; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  if (u > V || v > V) {
    continue;
  }
  if (costCheckObj[u].has(v) && costCheckObj[u].get(v) <= w) {
    continue;
  }
  arr[u].push([v, w]);
  costCheckObj[u].set(v, w);
}

visited[0] = true;
const dijkstra = (node) => {
  const heapq = new MinHeapq();
  costs[node] = 0;
  heapq.heapPush([0, node]);

  while (heapq.size > 0) {
    const [cost, node] = heapq.heapPop();
    visited[node] = true;
    updateCosts(cost, node, heapq);
    const nextNode = searchNextNode(heapq);
    if (!nextNode) {
      return;
    }
    const nextCost = costs[nextNode];
    heapq.heapPush([nextCost, nextNode]);
  }
};

const updateCosts = (cost, node, heapq) => {
  for (let [nextNode, nextCost] of arr[node]) {
    if (visited[nextNode]) {
      continue;
    }
    if (cost + nextCost < costs[nextNode]) {
      costs[nextNode] = cost + nextCost;
      heapq.heapPush([cost + nextCost, nextNode]);
    }
  }
};

const searchNextNode = (heapq) => {
  while (heapq.size > 0) {
    const [cost, node] = heapq.heapPop();
    if (!visited[node]) {
      return node;
    }
  }
  return false;
};

const print = (arr) => {
  let result = "";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === INF) {
      result += "INF";
    } else {
      result += arr[i];
    }
    if (i !== arr.length - 1) {
      result += "\n";
    }
  }
  console.log(result);
};

dijkstra(K);
print(costs);
