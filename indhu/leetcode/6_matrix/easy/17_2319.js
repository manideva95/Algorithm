// https://leetcode.com/problems/check-if-matrix-is-x-matrix/

/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i == j || (i + j) === (grid[0].length - 1)) {
                if (grid[i][j] === 0) return false
            } else if (grid[i][j] !== 0) return false
        }
    };
    return true
}

const result = checkXMatrix([[5, 7, 0], [0, 3, 1], [0, 5, 0]])
console.log(result);

// Observation:
// output Time Complexity : O(n)