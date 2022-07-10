const [x, y, w, s] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

const getMax = (...args) => {
  return Math.max(...args);
};

const getMin = (...args) => {
  return Math.min(...args);
};

const getAbsDiff = (a, b) => {
  return Math.abs(a - b);
};

const calOnlyW = (x, y, w) => {
  return (x + y) * w;
};

const calOnlyS = (x, y, w, s) => {
  return (x + y) % 2 ? (getMax(x, y) - 1) * s + w : getMax(x, y) * s;
};

const calWS = (x, y, w, s) => {
  return getMin(x, y) * s + getAbsDiff(x, y) * w;
};

const one = calOnlyW(x, y, w);
const two = calOnlyS(x, y, w, s);
const three = calWS(x, y, w, s);

const dis = getMin(one, two, three);
console.log(dis);
