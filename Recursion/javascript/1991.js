const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
let tree = new Map();
let rootNode, leftNode, rightNode;
for (let i = 1 ; i<input.length-1 ; i++){
  [rootNode, leftNode, rightNode] = input[i].split(' ');
  tree.set(rootNode,[leftNode,rightNode]);
}

const preorderTraversal = (node) =>{
  if (node ===".") return
  answer += node;
  preorderTraversal(tree.get(node)[0]);
  preorderTraversal(tree.get(node)[1]);
}

const inorderTraversal = (node) =>{
  if (node ===".") return
  inorderTraversal(tree.get(node)[0]);
  answer += node;
  inorderTraversal(tree.get(node)[1]);
}

const postorderTraversal = (node) =>{
  if (node ===".") return
  postorderTraversal(tree.get(node)[0]);
  postorderTraversal(tree.get(node)[1]);
  answer += node;
}

let answer = "";
preorderTraversal("A");
console.log(answer);

answer = "";
inorderTraversal("A");
console.log(answer);

answer = "";
postorderTraversal("A");
console.log(answer);