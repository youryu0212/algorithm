const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n,m] = input[0].split(' ').map(Number);

let graph = []
for(let i = 1 ; i<input.length-1 ; i++){
  graph.push(input[i].split('').map(Number));
}

class Node {
  constructor (item = null) {
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
    if (this.size===0) return -1;
    const popItem = this.head.item;
    this.head = this.head.next;
    if (this.head === null) this.tail = null;
    this.size--;
    return popItem;
  }
  isEmpty(){
    if (this.size === 0 ) return true;
    return false;
  }
}
let q = new Queue();
let x,y,nx,ny;
q.enqueue([0,0]);
const moves = [[-1,0],[0,1],[1,0],[0,-1]];
let move;
while (!q.isEmpty()){
  [x,y] = q.dequeue();
  for (move of moves){
    [nx,ny] = [x+move[0], y+move[1]];
    if (nx>=n || ny>=m || nx<0 || ny<0) continue;
    if (graph[nx][ny] == 1){
      graph[nx][ny] = graph[x][y] +1;
      q.enqueue([nx,ny]);
    }
  }
}
console.log(graph[n-1][m-1]);