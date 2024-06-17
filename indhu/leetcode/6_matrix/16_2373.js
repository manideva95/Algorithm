// https://leetcode.com/problems/largest-local-values-in-a-matrix/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let n = grid.length - 2;
    let maxLocal = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let maxVal = 0;
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    maxVal = Math.max(maxVal, grid[k][l]);
                }
            }
            maxLocal[i][j] = maxVal;
        }
    }
    return maxLocal;
};

const result = largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]])
console.log(result);

// Observation:
//    let row = parseInt(i / grid[0].length, 10);
// let col = i % grid[0].length;