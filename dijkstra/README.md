### 다익스트라 알고리즘

(BFS 최단거리)

![image](https://user-images.githubusercontent.com/87521172/168537512-0e09ef0b-5bba-4030-b024-50a99658ebb0.png)

(다익스트라 최단거리)

![image](https://user-images.githubusercontent.com/87521172/168537573-8ded87dd-b973-4b60-9972-73802991a905.png)

1. 모든 노드의 거리를 무한으로 설정
2. 방문하지 않은 노드 중 최소 비용의 노드를 선택
3. 해당 노드를 거쳐 다음 노드로 가는 경우를 고려해 비용을 갱신
4. 모든 노드 탐색시까지 2~3번 반복

![image](https://user-images.githubusercontent.com/87521172/168537595-325ac479-abb4-481c-8d5e-204d55b7a44a.png)

|      | 0   | 1   | 2   | 3   | 4   | 5   | 6   |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 거리 | 0   | Inf | Inf | Inf | Inf | Inf | Inf |

Pseudo code :

```javascript
// arr_info[idx] = [[노드번호, 거리] [노드번호, 거리] ... ]
arr_info = [ [[1,5], [2,3] ],[ [0,5] ... ],[...] ]
len = arr_inf.length
distance = [ Infinity for _ in range(len) ]
visited = [ false for _ in range(len) ]

function  dijkstra (){
    node = min_node(distance & not visited)
    if not node : return
    visited[node] = true
    current_distance = distance[node]
    next_step_distance = min(arr_info[node])
    next_node_dis = min(next_node_dis, next_step_distance+ current_distance)
    dijkstra()
}
```

```javascript
//  [노드, 거리]
const arr = [
  [
    [1, 5],
    [3, 1],
  ],
  [
    [0, 5],
    [2, 1],
    [4, 3],
  ],
  [
    [1, 1],
    [3, 2],
    [5, 2],
    [6, 8],
  ],
  [
    [0, 1],
    [2, 2],
    [5, 1],
  ],
  [
    [1, 3],
    [6, 1],
  ],
  [
    [2, 2],
    [3, 1],
    [6, 3],
  ],
  [
    [2, 8],
    [4, 1],
    [5, 3],
  ],
];

const len = arr.length;
const distance = new Array(len).fill(Infinity);
const visited = new Array(len).fill(false);
const route = new Array(len);
route[0] = "0";

const selectNode = () => {
  return distance.reduce(
    (node, cur, idx) => {
      if (visited[idx]) return node;
      if (cur < node[0]) return [cur, idx];
      return node;
    },
    [Infinity, 0]
  )[1];
};

const dijkstra = () => {
  distance[0] = 0;
  arr.forEach(() => {
    const node = selectNode();
    cost = distance[node];
    visited[node] = true;
    for (let [next_, dis] of arr[node]) {
      if (distance[next_] > cost + dis) {
        distance[next_] = cost + dis;
        route[next_] = route[node] + `-${next_}`;
      }
      // distance[next_] = Math.min(distance[next_], cost + dis);
    }
  });
};
dijkstra();
console.log(distance);
console.log(route);
// [0, 4, 3, 1, 6, 2, 5]
// [ '0', '0-3-2-1', '0-3-2', '0-3', '0-3-5-6-4', '0-3-5', '0-3-5-6' ]
```

## 실전 예제 :

### 문제 : 1753 최단경로

### 문제 : 1261 알고스팟

[1261번: 알고스팟](https://www.acmicpc.net/problem/1261)

- 미로의 크기는 총 n*m 이며 1*1크기의 방으로 이루어져 있다.
- 미로는 빈 방 또는 벽으로 구성
- 빈방은 자유롭게 이동이 가능하며, 벽은 부셔야 한다.
- 이동범위는 상하좌우로 한칸씩만 이동가능
- 현재 (0,0)에 위치한다면, n,m으로 이동하기 위해서 부셔야하는 벽의 최소 개수를 출력

### 이게 왜 다익스트라?

- 현재 노드까지 부순 벽의 개수 ( = 거리 )
- 0,0을 시작으로 n,m까지 부수는 벽의 개수 최소화 ( = 거리의 최소화 )

### how?

```javascript
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
    if (this.data[parentIdx][0] > this.data[childIdx][0]) {
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
    if (childIdx + 1 < this.size && this.data[childIdx + 1][0] < this.data[childIdx][0]) {
      childIdx += 1;
    }
    if (childIdx < this.size && this.data[childIdx][0] < this.data[parentIdx][0]) {
      this.swap(parentIdx, childIdx);
      parentIdx = childIdx;
      continue;
    }
    this.size -= 1;
    return this.data.pop();
  }
};

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [m, n] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push([...input[i]].map(Number));
}

const dijkstra = () => {
  const heap = new Heapq();
  const visited = Array.from(Array(n), () => new Array(m).fill(false));
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  distance[0][0] = 0;
  visited[0][0] = true;
  heap.heappush([0, 0, 0]);
  let cnt, r, c;
  while (heap.size > 0) {
    [cnt, r, c] = heap.heappop();
    if (r === n - 1 && c === m - 1) {
      return cnt;
    }
    for (let move of moves) {
      let [nx, ny] = [r + move[0], c + move[1]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (visited[nx][ny]) {
        continue;
      }
      visited[nx][ny] = true;
      if (arr[nx][ny] === 1) {
        heap.heappush([cnt + 1, nx, ny]);
      } else {
        heap.heappush([cnt, nx, ny]);
      }
    }
  }
};

console.log(dijkstra());
```

```python
import sys
from heapq import heappush,heappop

input = sys.stdin.readline

m,n = map(int,input().split())
arr = [list(map(int,input().rstrip())) for _ in range(n)]
moves = [(-1,0),(0,1),(1,0),(0,-1)]
answer = 0

visited = [[False for _ in range(m)] for _ in range(n)]
heap = []
heappush(heap,[0,0,0])
visited[0][0] = True

def dijkstra():
  while heap:
    cnt,r,c = heappop(heap)
    if r == n-1 and c == m-1:
      return cnt
    for move in moves:
      nx,ny = r+move[0], c+move[1]
      if nx<0 or ny<0 or nx>=n or ny>=m:
        continue
      if visited[nx][ny]: continue
      visited[nx][ny] = True
      if arr[nx][ny] == 1:
        heappush(heap,(cnt+1,nx,ny))
      else:
        heappush(heap,(cnt,nx,ny))
print(dijkstra())
```
