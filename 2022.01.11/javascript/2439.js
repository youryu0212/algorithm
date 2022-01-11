const fs= require('fs');
let input = Number(fs.readFileSync('/dev/stdin').toString());

let result = '';
for (let i = 1 ; i<=input ; i++){
    let tab = '';
    let star = '';
    for (let j = i ; j<input ; j++){
        tab += ' ';
    }
    for (let j = input-i ; j<input ; j++){
        star += '*';
    }
    result += tab+star+'\n';
}
console.log(result);