module.exports = function sumOfOther(arr) {
    let array = arr;
    const total = array.reduce((a, b) => a + b);
    let sumElem = array.map((num) => total - num);
    return sumElem;
}
