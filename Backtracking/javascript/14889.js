const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const combinations = (arr, n) => {
  const answer = [];
  const generateCombinations = ({ result, startIdx, cnt }) => {
    if (cnt === n) {
      answer.push(result);
      return;
    }
    for (let i = startIdx; i < arr.length; i++) {
      generateCombinations({ result: [...result, arr[i]], startIdx: i + 1, cnt: cnt + 1 });
    }
  };
  generateCombinations({ result: [], startIdx: 0, cnt: 0 });
  return answer;
};

const searchAnotherTeam = (n, arr) => {
  const anotherTeam = [];
  for (let i = 0; i < n; i++) {
    if (!arr.includes(i)) {
      anotherTeam.push(i);
    }
  }
  return anotherTeam;
};

const calculateTeamStatus = (arr, n) => {
  const targetCnt = ~~(n / 2);
  const startTeams = combinations(
    new Array(n).fill(1).map((_, idx) => idx),
    targetCnt
  );
  let answer = Infinity;
  startTeams.forEach((startTeam) => {
    const linkTeam = searchAnotherTeam(n, startTeam);
    const startTeamCombinations = combinations(startTeam, 2);
    const linkTeamCombinations = combinations(linkTeam, 2);
    let startTeamPoint = 0;
    let linkTeamPoint = 0;

    startTeamCombinations.forEach(([r, c]) => {
      startTeamPoint += arr[r][c];
      startTeamPoint += arr[c][r];
    });
    linkTeamCombinations.forEach(([r, c]) => {
      linkTeamPoint += arr[r][c];
      linkTeamPoint += arr[c][r];
    });
    answer = Math.min(answer, Math.abs(startTeamPoint - linkTeamPoint));
  });
  return answer;
};

const answer = calculateTeamStatus(arr, n);
console.log(answer);
