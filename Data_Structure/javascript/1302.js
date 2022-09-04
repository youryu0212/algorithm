const [,...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const getBookCount = (arr) => {
    const cntMap = arr.sort().reduce((cntMap,bookName)=>{
        cntMap.has(bookName) ? cntMap.set(bookName,cntMap.get(bookName)+1) : cntMap.set(bookName,1);
        return cntMap
    },new Map())
    let answer = {cnt:0,bookName:""};
    for (const [bookName,cnt] of cntMap){
        if (cnt>answer.cnt){
            answer = {cnt,bookName};
        }
    }
    return answer.bookName;
}
console.log(getBookCount(arr))
