const arr = [
  3, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1,
];

console.log(
  !!(
    ([...require("fs").readFileSync("/dev/stdin").toString().trim()].reduce(
      (answer, word) => answer + arr[word.charCodeAt(0) - "A".charCodeAt(0)],
      0
    ) %
      10) %
    2
  )
    ? "I'm a winner!"
    : "You're the winner?"
);
