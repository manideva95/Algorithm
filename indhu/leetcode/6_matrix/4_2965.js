// https://leetcode.com/problems/find-missing-and-repeated-values/

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let ans = [0, 0];
    let map = new Map();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (map.has(map.get(grid[i][j]))) {
                ans[0] = grid[i][j];
            }
            map.set(grid[i][j], grid[i][j])
        }
    }
    let result = Array.from({ length: map.size + 1 }, (v, k) => k + 1);
    for (let i = 0; i < result.length; i++) {
        if (!map.has(result[i])) {
            ans[1] = result[i]; break;
        }
    }
    return ans
};

const result = findMissingAndRepeatedValues([[1, 3], [2, 2]])
console.log(result);

// Observation:
// output Time Complexity : O(n)