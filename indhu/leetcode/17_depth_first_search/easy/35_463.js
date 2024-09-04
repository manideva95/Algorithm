// https://leetcode.com/problems/island-perimeter/description/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let sum = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                if (!grid[i][j + 1]) sum++;
                if (!grid[i][j - 1]) sum++;
                if (grid[i + 1] === undefined || (grid[i + 1] !== undefined && grid[i + 1][j] === 0)) sum++;
                if (grid[i - 1] === undefined || (grid[i - 1] !== undefined && grid[i - 1][j] === 0)) sum++;

            }
        }
    }

    return sum
};