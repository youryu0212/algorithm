const recursion = (word, left, right, cnt) => {
  if (left >= right) {
    return [1, cnt];
  }
  if (word[left] !== word[right]) {
    return [0, cnt];
  }
  return recursion(word, left + 1, right - 1, cnt + 1);
};

const isPalindrome = (word) => {
  return recursion(word, 0, word.length - 1, 1);
};

console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((word) => isPalindrome(word).join(" "))
    .join("\n")
);
