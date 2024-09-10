// https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let resultSum = 0;
    for (let i = 0; i < grid.length; i++) {
        let cloumnSum = 0
        for (let j = 0; j < grid.length; j++) {
            cloumnSum = Math.max(cloumnSum, grid[j][i])
        }
        for (let j = 0; j < grid.length; j++) {
            let rowSum = Math.max(...grid[j]);
            if (rowSum < cloumnSum) resultSum += Math.abs(grid[j][i] - rowSum)
            else resultSum += Math.abs(grid[j][i] - cloumnSum)
        }

    }
    return resultSum
};