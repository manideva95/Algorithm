// https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFlips = function (grid) {
    if (grid.length === 1 || grid[0].length === 1) return 0

    let rowFlip = 0, colFlip = 0;
    for (let i = 0; i < grid.length; i++) {
        let j = 0, k = grid[i].length - 1;
        while (j < k) {
            if (grid[i][j] !== grid[i][k]) rowFlip++;
            j++; k--;
        }
    }
    for (let i = 0; i < grid[0].length; i++) {
        let j = 0; k = grid.length - 1
        while (j < k) {
            if (grid[j][i] !== grid[k][i]) colFlip++;
            j++; k--;
        }
    }
    return rowFlip > colFlip ? colFlip : rowFlip
};