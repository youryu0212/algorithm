const fs = require('fs');
let color = fs.readFileSync('/dev/stdin').toString().split('\n');

let resistance = {"black":[0,1],"brown":[1,10],"red":[2,100],"orange":[3,1000],
             "yellow":[4,10000],"green":[5,100000],"blue":[6,1000000],"violet":[7,10000000],
             "grey":[8,100000000],"white":[9,1000000000]};
let answer = 0;
for (let i = 0 ; i<3 ; i++){
    if (i<2){
        answer *= 10;
        answer += resistance[color[i]][0];
    }
    else{
        answer *= resistance[color[i]][1];
    }
}
console.log(answer)