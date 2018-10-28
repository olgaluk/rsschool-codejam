function make() {
    var arr = Array.from(arguments);
    var inner = function (b) {
        if (typeof b !== 'function') {
            let res = Array.from(arguments);
            let res1 = arr;
            arr = res1.concat(res);
            return inner;
        } else {
            return arr.reduce(b);
        }
    };
    return inner;
}