class Heapq {
  constructor(heapCase = "min") {
    this.heap = [null];
    this.category = heapCase;
    this.size = 0;
  }

  heappush(item) {
    this.size++;
    this.heap.push(item);
    const childIdx = this.size;
    const parentIdx = Math.floor(childIdx / 2);
    this.setPosition(childIdx, parentIdx, "push");
  }
  heappop() {
    if (this.size === 0) {
      return;
    }
    this.swap(1, this.size--);
    const parentIdx = 1;
    const childIdx = this.getChildPositionForPop(parentIdx);
    this.setPosition(childIdx, parentIdx, "pop");
    return this.heap.pop();
  }

  swap(childIdx, parentIdx) {
    [this.heap[childIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[childIdx]];
  }

  setPosition(childIdx, parentIdx, method = "push") {
    if (childIdx <= 1 || childIdx > this.size) {
      return;
    }

    if (this.category === "min" && this.heap[childIdx][0] < this.heap[parentIdx][0]) {
      this.swap(childIdx, parentIdx);

      if (method === "pop") {
        [parentIdx, childIdx] = [childIdx, this.getChildPositionForPop(childIdx)];
      }
      if (method === "push") {
        [parentIdx, childIdx] = [Math.floor(parentIdx / 2), parentIdx];
      }

      this.setPosition(childIdx, parentIdx);
      return;
    }

    if (
      this.category === "min" &&
      this.heap[childIdx][0] === this.heap[parentIdx][0] &&
      Number(this.heap[childIdx][1]) < Number(this.heap[parentIdx][1])
    ) {
      this.swap(childIdx, parentIdx);

      if (method === "pop") {
        [parentIdx, childIdx] = [childIdx, this.getChildPositionForPop(childIdx)];
      }
      if (method === "push") {
        [parentIdx, childIdx] = [Math.floor(parentIdx / 2), parentIdx];
      }

      this.setPosition(childIdx, parentIdx);
      return;
    }

    if (this.category === "max" && this.heap[childIdx][0] > this.heap[parentIdx][0]) {
      this.swap(childIdx, parentIdx);

      if (method === "pop") {
        [parentIdx, childIdx] = [childIdx, this.getChildPositionForPop(childIdx)];
      }
      if (method === "push") {
        [parentIdx, childIdx] = [Math.floor(parentIdx / 2), parentIdx];
      }

      this.setPosition(childIdx, parentIdx);
      return;
    }

    if (
      this.category === "max" &&
      this.heap[childIdx][0] === this.heap[parentIdx][0] &&
      Number(this.heap[childIdx][1]) > Number(this.heap[parentIdx][1])
    ) {
      this.swap(childIdx, parentIdx);

      if (method === "pop") {
        [parentIdx, childIdx] = [childIdx, this.getChildPositionForPop(childIdx)];
      }
      if (method === "push") {
        [parentIdx, childIdx] = [Math.floor(parentIdx / 2), parentIdx];
      }

      this.setPosition(childIdx, parentIdx);
      return;
    }
  }

  getChildPositionForPop(parentIdx) {
    let childIdx = parentIdx * 2;
    if (this.size < childIdx || parentIdx === 0) {
      return parentIdx;
    }
    if (
      this.category === "min" &&
      this.size >= childIdx + 1 &&
      this.heap[childIdx + 1][0] < this.heap[childIdx][0]
    ) {
      childIdx += 1;
    } else if (
      this.category === "min" &&
      this.size >= childIdx + 1 &&
      this.heap[childIdx + 1][0] === this.heap[childIdx][0] &&
      Number(this.heap[childIdx + 1][1]) < Number(this.heap[childIdx][1])
    ) {
      childIdx += 1;
    } else if (
      this.category === "max" &&
      this.size >= childIdx + 1 &&
      this.heap[childIdx + 1][0] > this.heap[childIdx][0]
    ) {
      childIdx += 1;
    } else if (
      this.category === "max" &&
      this.size >= childIdx + 1 &&
      this.heap[childIdx + 1][0] === this.heap[childIdx][0] &&
      Number(this.heap[childIdx + 1][1]) > Number(this.heap[childIdx][1])
    ) {
      childIdx += 1;
    }

    return childIdx;
  }
}

const minHeap = new Heapq("min");
const maxHeap = new Heapq("max");

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]);
const M = Number(input[N + 1]);

const problemList = new Array(100001).fill(false);
const visitedList = Array.from(Array(100001), () => new Set());

for (let i = 1; i <= N; i++) {
  const [P, L] = input[i].split(" ").map(Number);
  minHeap.heappush([L, P]);
  maxHeap.heappush([L, P]);
  problemList[P] = L;
}

const getRecommend = (category) => {
  if (category === 1) {
    while (true) {
      const [L, P] = maxHeap.heappop();
      if (problemList[P] && !visitedList[P].has(L)) {
        maxHeap.heappush([L, P]);
        return P;
      }
    }
  }

  if (category === -1) {
    while (true) {
      const [L, P] = minHeap.heappop();
      if (problemList[P] && !visitedList[P].has(L)) {
        minHeap.heappush([L, P]);
        return P;
      }
    }
  }
};

const add = (P, L) => {
  problemList[P] = L;
  minHeap.heappush([L, P]);
  maxHeap.heappush([L, P]);
};

const solved = (P) => {
  visitedList[P].add(problemList[P]);
  problemList[P] = false;
};

const orders = {
  recommend: (category) => getRecommend(category),
  add: (P, L) => add(P, L),
  solved: (P) => solved(P),
};

const answer = [];

for (let i = N + 2; i < N + M + 2; i++) {
  const order = input[i].split(" ");
  const problem = orders[order[0]](Number(order[1]), Number(order[2]));

  if (problem) {
    answer.push(problem);
  }
}
console.log(answer.join("\n"));
