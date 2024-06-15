// https://leetcode.com/problems/delete-greatest-value-in-each-row/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let sum = 0;
    grid.forEach((item, i) => grid[i] = item.sort((a, b) => b - a));
    console.log(grid);
    for (let i = 0; i < grid[0].length; i++) {
        let max = 0;
        for (let j = 0; j < grid.length; j++) {
            max = Math.max(max, grid[j][i])
        }
        sum = sum + max
    }
    return sum
};

const result = deleteGreatestValue([[10, 9, 2], [11, 1, 2]])
console.log(result);

// Observation:
// output Time Complexity : O(n)