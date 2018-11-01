module.exports = function recursion(node) {
  const queue = [];
  const val = [];
  queue.push(node);
  function map(a) {
    if (a.length !== 0) {
      const tempNode = a.shift();
      val.push(tempNode.value);
      if (tempNode.left) {
        a.push(tempNode.left);
      }
      if (tempNode.right) {
        a.push(tempNode.right);
      }
      return map(queue);
    }
  }
  map(queue);
  const arr1 = [];
  for (let i = 1; i < val.length; i *= 2) {
    arr1.push(val.slice(i - 1, i * 2 - 1));
  }
  return arr1;
};
