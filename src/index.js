exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return Math.min.apply(null, array);
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return Math.max.apply(null, array);
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        const reducer = (acc, curVal) => acc + curVal;
        let sum = array.reduce(reducer);
        let lenArr = array.length;
        return sum / lenArr;
    }
};
