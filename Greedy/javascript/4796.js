const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const answer = input
  .reduce((answer, arr, idx) => {
    if (!arr || Number(arr[0]) === 0) {
      return answer;
    }
    const [L, P, V] = arr.split(" ").map(Number);
    const remainDay = Math.min(V % P, L);
    const day = Math.floor(V / P) * L + remainDay;
    answer.push(`Case ${idx + 1}: ${day}`);
    return answer;
  }, [])
  .join("\n");

console.log(answer);
