const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
console.log([...new Set(input.slice(1,input.length-1))]
    .sort((a,b) => {
        if (a.length === b.length) return a.localeCompare(b);
        return a.length - b.length
    })
    .reduce((s,cur) => {s+=`${cur}\n`; return s},""));