// https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    let result = []
    for (let i = 0; i < grid[0].length; i++) {
        let j = 0; let max = 0
        while (j < grid.length) {
            max = Math.max(grid[j][i].toString().length, max)
            j++
        }
        result.push(max)
    }
    return result
};

const result = findColumnWidth([[-15, 1, 3], [15, 7, 12], [5, 6, -12]])
console.log(result);

// Observation:
// output Time Complexity : O(n)