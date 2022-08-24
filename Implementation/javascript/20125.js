const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input.slice(1);

const getHeart = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === "*") {
        return [i + 1, j];
      }
    }
  }
};

const [r, c] = getHeart(arr);

const getLength = (N, r, c, d) => {
  let length = -1;
  switch (d) {
    case "L":
      while (c >= 0 && arr[r][c] === "*") {
        length++;
        c--;
      }
      return length;
    case "R":
      while (c < N && arr[r][c] === "*") {
        length++;
        c++;
      }
      return length;
    case "BACK":
      while (r < N && arr[r][c] === "*") {
        length++;
        r++;
      }
      return length;
    case "LEFT_LEG":
      while (arr[r][c] === "*") {
        r++;
      }
      length = 0;
      c--;
      while (r < N && arr[r][c] === "*") {
        length++;
        r++;
      }
      return length;
    case "RIGHT_LEG":
      while (arr[r][c] === "*") {
        r++;
      }
      length = 0;
      c++;
      while (r < N && arr[r][c] === "*") {
        length++;
        r++;
      }
      return length;
  }
};

const left = getLength(N, r, c, "L");
const right = getLength(N, r, c, "R");
const back = getLength(N, r, c, "BACK");
const leftLeg = getLength(N, r, c, "LEFT_LEG");
const rightLeg = getLength(N, r, c, "RIGHT_LEG");

console.log(r + 1, c + 1);
console.log(left, right, back, leftLeg, rightLeg);
