class Stack{
  constructor(){
    this.stack = [];
  }
  push(item){
    this.stack.push(item);
  }
  pop(){
    if(this.stack.length ===0) return -1;
    return this.stack.pop();
  }
  size(){
    return this.stack.length;
  }
  empty(){
    if (this.stack.length===0) return 1;
    return 0
  }
  top(){
    if (this.stack.length ===0) return -1;
    return this.stack[this.stack.length-1];
  }
}

const stack = new Stack();
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let orders,result,answer="";
for (let i = 1 ; i<input.length-1 ; i++){
  orders = input[i].split(' ');
  if (orders.length ===2 ) result = stack[orders[0]](Number(orders[1]));
  else result = stack[orders[0]]();
  if (result || result ===0){
    answer += result+"\n";
  }
}
console.log(answer);