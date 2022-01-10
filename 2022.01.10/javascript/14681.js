const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);
    const result = [0,(x>0 && y> 0),( x< 0 && y > 0),(x< 0 && y<0),(x> 0 && y<0)];
    for (let i = 1; i<result.length ; i++){
        if (result[i]){
            console.log(i);
            break;
        }
    }
  process.exit();
});