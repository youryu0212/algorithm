class Node {
  constructor(item = null){
    this.item = item;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue(item){
    const newNode = new Node(item);
    if (this.size ===0 ) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  dequeue(){
    if (this.size ===0) return -1;
    const popItem = this.head.item;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.size--;
    return popItem;
  }
  isEmpty(){
    return this.size===0;
  }
}


const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let graph = [];
const moves = [[-1,0],[0,1],[1,0],[0,-1]];
let move;
let nx,ny;
let landNum = 2;
let result = Infinity;

for (let i = 1 ; i<=n ; i++){
  graph.push(input[i].split(' ').map(Number));
}
const range_check = (x,y)=>{
  return ! ( x>=n || y>=n || x<0 || y<0);
}

const dfs = (r,c,landNum) =>{
  if (graph[r][c] !== 1 ) return
  graph[r][c] = landNum;
  for (move of moves){
    [nx,ny] = [r+move[0],c+move[1]];
    if (!range_check(nx,ny)) continue;
    if (graph[nx][ny] == 1) dfs(nx,ny,landNum);
  }
}
let visited = [];
for (let i = 0 ; i <n ; i++){
  visited.push(new Array(n));
}
const bfs = (landNum) => {
  for (let i = 0 ; i<n ; i++){
    for (let j = 0 ; j<n ; j++){
      visited[i][j] = false;
      if (graph[i][j] ===landNum){
        q.enqueue([i,j,0]);
      }
    }
  }
  
  let r,c,dis,nx,ny;
  while (!q.isEmpty()){
    [r,c,dis] = q.dequeue()
    for (move of moves){
      [nx,ny] = [r+move[0], c+move[1]];
      if (!range_check(nx,ny)) continue;
      if (graph[nx][ny] === 0 && !visited[nx][ny]){
        q.enqueue([nx,ny,dis+1]);
        visited[nx][ny] = true;
      }
      if (graph[nx][ny] !== 0 && graph[nx][ny] !== landNum){
        return dis;
      }
    }
  }
}
for (let i = 0 ; i<n ; i++){
  for (let j = 0 ; j<n ; j++){
    if (graph[i][j] == 1){
      dfs(i,j,landNum++);
    }
  }
}

let q = new Queue();
for (let i = 2 ; i<landNum-1 ; i++){
  while (! q.isEmpty()){
    q.dequeue();
  }
  result = Math.min(bfs(i),result);
}
console.log(result);