module.exports = function make() {
  let arr = Array.from(arguments);
  if (arr.length !== 0) {
    const inner = function collect(b) {
      if (typeof b !== 'function') {
        const res = Array.from(arguments);
        const res1 = arr;
        arr = res1.concat(res);
        return inner;
      }
      return arr.reduce(b);
    };
    return inner;
  }
  return arr;
};
