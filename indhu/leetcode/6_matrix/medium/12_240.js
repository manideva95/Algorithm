// https://leetcode.com/problems/search-a-2d-matrix-ii/description/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length; n = matrix[0].length;
    let row = 0, col = n - 1;
    while (col >= 0 && row < m) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--
        else row++
    }
    return false
};