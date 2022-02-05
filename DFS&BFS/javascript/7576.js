class Node {
  constructor(item = null){
    this.item = item;
    this.next = null;
  }
}
class Queue {
  constructor (){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  enqueue (item){
    const newNode = new Node(item);
    if (this.size===0) this.head=newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  dequeue (){
    if (this.isEmpty()) return -1;
    const popItem = this.head.item;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.size--;
    return popItem;
  }
  isEmpty (){
    if (this.size===0) return true;
    return false;
  }
}
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [c,r] = input[0].split(' ').map(Number);
let graph = [];
let x,y,cnt,move;
let nx,ny;
for (let i = 1 ; i<=r ; i++){
  graph.push(input[i].split(' ').map(Number));
}

let q = new Queue();
for (let i = 0 ; i<r ; i++){
  for (let j = 0 ; j<c ; j++){
    if (graph[i][j] === 1){
      q.enqueue([i,j,0]);
    }
  }
}
const moves = [[-1,0],[0,1],[1,0],[0,-1]];
while (!q.isEmpty()){
  [x,y,cnt] = q.dequeue();
  
  for (move of moves){
    [nx,ny] = [x+move[0] , y+move[1]];
    if (nx>=r || ny>=c || nx<0 || ny<0) continue
    if (graph[nx][ny] == 0){
      graph[nx][ny] = 1;
      q.enqueue([nx,ny,cnt+1]);
    }
  }
}

for (let i = 0 ; i<r ; i++){
  if (graph[i].includes(0)) {
    cnt = -1;
    break
  }
}
console.log(cnt);