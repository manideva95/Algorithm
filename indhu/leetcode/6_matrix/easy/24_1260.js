// https://leetcode.com/problems/shift-2d-grid/

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    let result = []
    let arr = grid.flatMap(item => item);
    k = k % arr.length;
    let shiftedArr = [...arr.slice(arr.length - k, arr.length), ...arr.slice(0, arr.length - k)]
    for (let i = 0; i < grid.length; i++) {
        result.push(shiftedArr.slice(i * grid[0].length, (i * grid[0].length) + grid[0].length))
    }
    return result
};

const result = shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23)
console.log(result);

// Observation:
// output Time Complexity : O(n)