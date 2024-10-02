// https://leetcode.com/problems/spiral-matrix-iii/description/

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
    const result = [];
    let rowS = rStart, colS = cStart,
        rowE = (rows - 1) === rStart ? rStart : rStart + 1,
        colE = (cols - 1) === cStart ? cStart : cStart + 1;

    while (colS <= colE && rowS <= rowE) {

        for (let i = colS; i <= colE; i++) {
            console.log(rowS, rowE, '1');

            result.push([rowS, i])
        }
        if (rowS < rowE) {
            rowS++;
            colE--
        }

        for (let i = rowS; i <= rowE; i++) {
            console.log(rowS, rowE, '2');
            result.push([i, colE])
        }
        if (colE < (cols - 1)) colE--;

        for (let i = colE; i >= colS; i--) {
            console.log(rowS, rowE, '3');

            result.push([rowE, i])
        }
        if (rowE < (rows - 1)) rowE--

        for (let i = rowE; i >= rowS; i--) {
            console.log(rowS, rowE, '4');

            result.push([i, colS])
        }
        if (colS < colE) colS++
    }
    return result
};

[[0, 0], [0, 1], [0, 2], [0, 3]]

const result = spiralMatrixIII(5, 6, 1, 4)
console.log(result);

[[1, 4], [1, 5], [2, 5], [2, 4], [2, 3], [1, 3], [0, 3], [0, 4], [0, 5], [3, 5], [3, 4], [3, 3], [3, 2], [2, 2], [1, 2], [0, 2], [4, 5], [4, 4], [4, 3], [4, 2], [4, 1], [3, 1], [2, 1], [1, 1], [0, 1], [4, 0], [3, 0], [2, 0], [1, 0], [0, 0]]