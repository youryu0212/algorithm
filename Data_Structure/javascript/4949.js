const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

result = "";
let dic = new Map();
dic.set(")","(");
dic.set("]","[");
dic.set("}","{");

for (let i = 0 ; i<input.length-2 ; i++){
  stack = [];
  let char;
  for (let j = 0 ; j<input[i].length ; j++){
    char = input[i][j]; 
    s = "yes";
    if (char === "(" || char === "}" || char === "[") {
      stack.push(char);
      continue
    }
    if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0){
        s = "no";
        break;
      }
      if (stack.pop() !== dic.get(char)){
        s = "no";
        break;
      }
    }
  }
  if (stack.length !== 0) s = "no";
  result += s;
  if (i !== input.length-3) result += "\n";
}
console.log(result);