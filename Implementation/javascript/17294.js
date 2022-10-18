console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("")
    .map(Number)
    .reduce(
      (obj, cur, idx) => {
        return idx === 0
          ? { diff: cur, last: cur }
          : idx === 1
          ? { diff: cur - obj.last, last: cur }
          : cur - obj.last !== obj.diff
          ? { diff: -11, last: 0 }
          : { ...obj, last: cur };
      },
      { diff: null, last: 0 }
    ).diff === -11
    ? "흥칫뿡!! <(￣ ﹌ ￣)>"
    : "◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!"
);
