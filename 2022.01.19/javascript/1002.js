const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0]);

for (let i = 1, x1,x2,y1,y2,r1,r2,d,result ; i<= T ; i++){
    [x1,y1,r1,x2,y2,r2] = input[i].split(' ').map(Number);
    d = Math.sqrt(Math.abs(x1-x2)**2 + Math.abs(y1-y2)**2);
    if (x1 === x2 && y1 === y2 && r1 === r2) result = -1;
    else if (d> r1+r2 || d < Math.abs(r1-r2)) result = 0;
    else if (d===r1+r2 || d===Math.abs(r1-r2)) result = 1;
    else result = 2;
    console.log(result);
}