console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((row) => row.split(" "))
    .map(([a, b]) =>
      [...a].sort().join("") === [...b].sort().join("")
        ? `${a} & ${b} are anagrams.`
        : `${a} & ${b} are NOT anagrams.`
    )
    .join("\n")
);
