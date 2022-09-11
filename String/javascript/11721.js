let idx = 0;
const answer = [...require("fs").readFileSync("/dev/stdin").toString().trim()]
  .reduce(
    (answer, char) => {
      if (answer[idx]?.length >= 10) {
        idx++;
        answer[idx] = [];
      }
      answer[idx] = [...answer[idx], char];
      return answer;
    },
    [[]]
  )
  .map((row) => row.join(""))
  .join("\n");

console.log(answer);
