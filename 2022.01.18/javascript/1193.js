const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin'));
let x = 1;
let y = 1;
let c = 1;
let r = 1;
let x_gap = 4;
let y_gap = 2;
let i = 0;
while (x<n && y<n){
    if (i%2 === 0) {
        x++;
        y += y_gap;
        y_gap += 4;
        i++;
    }
    else {
        x += x_gap;
        y++;
        x_gap += 4;
        i = 0;
    }
    c++;
    r++;
}
if (x<=y){
    r = 1;
    while (x<n){
        c--;
        r++;
        x++;
    }
}
else{
    c = 1;
    while (y<n){
        r--;
        c++;
        y++;
    }
}

console.log(`${r}/${c}`);