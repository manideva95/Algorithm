// https://leetcode.com/problems/check-if-grid-satisfies-conditions/
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            if (i + 1 < grid.length && grid[i][j] !== grid[i + 1][j]) {
                return false;
            }
            if (j + 1 < grid[0].length && grid[i][j] === grid[i][j + 1]) {
                return false;
            }
        }
    }
    return true;
};

const result = satisfiesConditions([[1, 0, 2], [1, 0, 2]])
console.log(result);

// Observation:
// output Time Complexity : O(n^2)