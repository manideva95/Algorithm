// https://leetcode.com/problems/spiral-matrix-ii/description/

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let result = Array(n).fill(0).map(() => Array(n).fill(0)), count = 0;
    let rowS = 0, colS = 0, rowE = n - 1, colE = n - 1;
    while (rowS <= rowE && colS <= colE) {
        for (let i = colS; i <= colE; i++) {
            count++;
            result[rowS][i] = count
        }
        rowS++

        for (let i = rowS; i <= rowE; i++) {
            count++;
            result[i][colE] = count
        }
        colE--

        for (let i = colE; i >= colS; i--) {
            count++;
            result[rowE][i] = count
        }
        rowE--
        for (let i = rowE; i >= rowS; i--) {
            count++;
            result[i][colS] = count
        }
        colS++
    }
    return result
};