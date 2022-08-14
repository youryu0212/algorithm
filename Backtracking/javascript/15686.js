const [[N, M], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const bfsSearch = (arr, N, M) => {
  const houses = [];
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 1) {
        houses.push([r, c]);
      }
    }
  }
  const chickenHouses = getChickenHouse(arr);
  const testCase = getTestCase(chickenHouses, M);
  let answer = Infinity;

  for (const remainChickenHouses of testCase) {
    answer = Math.min(answer, getDistance(arr, houses, remainChickenHouses));
  }
  return answer;
};

const getChickenHouse = (arr) => {
  const chickenHouses = [];
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[0].length; c++) {
      if (arr[r][c] === 2) {
        chickenHouses.push([r, c]);
      }
    }
  }
  return chickenHouses;
};

const getTestCase = (chickenHouses, M) => {
  const caseArr = [];
  if (chickenHouses.length === M) {
    return [chickenHouses];
  }
  const generate = (current, M, idx) => {
    if (current.length === M) {
      caseArr.push(current);
      return;
    }
    for (let i = idx; i < chickenHouses.length; i++) {
      generate([...current, chickenHouses[i]], M, i + 1);
    }
  };
  generate([], M, 0);

  return caseArr;
};

const getDistance = (arr, houses, chickenHouses) => {
  const answer = houses.map(([houseR, houseC]) =>
    chickenHouses.reduce(
      (distance, [chickenR, chickenC]) =>
        Math.min(distance, Math.abs(houseR - chickenR) + Math.abs(houseC - chickenC)),
      Infinity
    )
  );

  return answer.reduce((sum, num) => sum + num, 0);
};

const answer = bfsSearch(arr, N, M);
console.log(answer);
