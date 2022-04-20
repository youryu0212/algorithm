const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [s, n] = input[0].split(" ");

const answer = [];
const top = [2, 3, 5, 6, 7, 8, 9, 0];
const topColLeftRight = [4, 8, 9, 0];
const topColLeft = [5, 6];
const topColRight = [1, 2, 3, 7];

const middle = [2, 3, 4, 5, 6, 8, 9];

const bottomColLeftRight = [6, 8, 0];
const bottomColLeft = [2];
const bottomColRight = [1, 3, 4, 5, 7, 9];
const bottom = [2, 3, 5, 6, 8, 9, 0];
const row = (arr) => {
  return [...n].reduce((string, char) => {
    if (arr.includes(Number(char))) {
      return (
        string +
        " " +
        Array(Number(s))
          .fill(1)
          .map(() => "-")
          .join("") +
        " " +
        " "
      );
    }
    return (
      string +
      Array(Number(s) + 3)
        .fill(1)
        .map(() => " ")
        .join("")
    );
  }, "");
};

const col = (one, two, three) => {
  return Array(Number(s))
    .fill(1)
    .map(() => {
      return [...n].reduce((string, char) => {
        if (one.includes(Number(char))) {
          return (
            string +
            "|" +
            Array(Number(s))
              .fill(1)
              .map(() => " ")
              .join("") +
            "|" +
            " "
          );
        }
        if (two.includes(Number(char))) {
          return (
            string +
            "|" +
            Array(Number(s) + 2)
              .fill(1)
              .map(() => " ")
              .join("")
          );
        }
        if (three.includes(Number(char))) {
          return (
            string +
            Array(Number(s) + 1)
              .fill(1)
              .map(() => " ")
              .join("") +
            "|" +
            " "
          );
        }
        return (
          string +
          Array(Number(s) + 3)
            .fill(1)
            .map(() => " ")
            .join("")
        );
      }, "");
    })
    .join("\n");
};

answer.push(row(top));
answer.push(col(topColLeftRight, topColLeft, topColRight));
answer.push(row(middle));
answer.push(col(bottomColLeftRight, bottomColLeft, bottomColRight));
answer.push(row(bottom));
console.log(answer.join("\n"));
