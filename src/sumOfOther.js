module.exports = function sumOfOther(arr) {
  if (arguments.length !== 0) {
    const array = arr;
    const total = array.reduce((a, b) => a + b);
    const sumElem = array.map(num => total - num);
    return sumElem;
  }
  return [];
};
