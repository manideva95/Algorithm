// https://leetcode.com/problems/make-a-square-with-the-same-color/
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i + 1] && grid[i][j + 1] && grid[i + 1][j] &&
                ((grid[i][j] == grid[i + 1][j] && grid[i][j] == grid[i][j + 1]) ||
                    (grid[i][j + 1] == grid[i + 1][j] && grid[i + 1][j + 1] == grid[i][j + 1]) ||
                    (grid[i][j] == grid[i + 1][j] && grid[i + 1][j + 1] == grid[i][j]) ||
                    (grid[i][j] == grid[i][j + 1] && grid[i + 1][j + 1] == grid[i][j]))) {
                return true;
            }
        }
    }
    return false;
};

const result = canMakeSquare([["W", "W", "W"], ["B", "B", "B"], ["B", "W", "B"]])
console.log(result);

// Observation:
// output Time Complexity : O(n)