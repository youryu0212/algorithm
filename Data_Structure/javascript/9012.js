const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
for (let i = 1,stack,result ; i<input.length-1 ; i++){
  stack = [];
  result = "YES";
  for (let j = 0 ; j<input[i].length ; j++){
    if (input[i][j] === "(") stack.push("(");
    else{
      if (stack.length === 0) {result = "NO"; break;}
      stack.pop();
    }
  }
  if (stack.length !== 0) result ="NO";
  console.log(result)
}