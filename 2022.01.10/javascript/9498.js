const fs = require('fs');
const point = Number(fs.readFileSync('/dev/stdin'));
if (point >=90){
    console.log("A");
}
else if (point >=80){
    console.log("B");
}
else if (point >= 70){
    console.log("C");
}
else if (point>=60){
    console.log("D");
}
else{
    console.log("F");
}