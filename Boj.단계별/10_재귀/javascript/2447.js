const n = Number(require('fs').readFileSync('/dev/stdin'));
let stars = [];
for (let i = 0 ; i<n; i++) stars.push(new Array(n));
const starFnc = (stars,r,c) => {
    if (stars[r][c] != undefined) return stars[r][c]
    if (r%3 === 1 && c%3 === 1) stars[r][c] = " ";
    else if (r>=3 && c>=3) stars[r][c] = starFnc(stars,parseInt(r/3),parseInt(c/3));
    else stars[r][c] = "*"
    return stars[r][c]
}
for (let r = 0 ; r<n ; r++){
    for (let c = 0 ; c <n ; c++){
        stars[r][c] = starFnc(stars,r,c);
    }
}
for (let i = 0 ;i<n ; i++){
  console.log(stars[i].join(""));
}
