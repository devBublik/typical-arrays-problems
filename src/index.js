exports.min = function min(array) {
    if (array != null && array != '') {
        return Math.min(...array);
    } else {
        return 0;
    }
};

exports.max = function max(array) {
    if (array != null && array != '') {
        return Math.max(...array);
    } else {
        return 0;
    }
};

exports.avg = function avg(array) {
    if (array && array.length !== 0) {
        let result = array.reduce((sum, current) => sum + current, 0);
        return result / array.length;
    } else {
        return 0;
    }
};
