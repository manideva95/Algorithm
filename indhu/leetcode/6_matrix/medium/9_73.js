
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let count = 0
var setZeroes = function (matrix) {
    let row = [], col = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = 1;
                col[j] = 1;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0
            }
        }
    }

    return matrix
};


const res = setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]]);
console.log(res, count);