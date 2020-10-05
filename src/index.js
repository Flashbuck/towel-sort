
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === []) {
        return matrix;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            continue;
        }
        matrix[i].reverse();
    }
    let newArr = [].concat(...matrix);
    return newArr;
}
