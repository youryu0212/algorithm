const data = require('fs').readFileSync('/dev/stdin').toString().split('\n')[1].split(' ').map(Number);
const sorted_data = [...new Set(data)].reduce((arr,cur) => { arr.push(cur); return arr},[]).sort((a,b) => a-b);
let i = 0;
const dic = sorted_data.reduce((dic,cur) => {dic.set(cur,i); i++; return dic},new Map())
console.log(data.reduce((result,cur) => {result += dic.get(cur)+" "; return result},""));