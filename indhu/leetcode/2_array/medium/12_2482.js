// https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column/

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    let r1 = Array(rows).fill(0);
    let r0 = Array(rows).fill(0);
    let c1 = Array(cols).fill(0);
    let c0 = Array(cols).fill(0);
    let diff = Array.from({ length: rows }, () => new Int32Array(cols));

    // Calculate row sums and zero counts
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                r1[i]++;
                c1[j]++;
            } else {
                r0[i]++;
                c0[j]++;
            }
        }
    }
    // Calculate the difference matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            diff[i][j] = (r1[i] + c1[j]) - (r0[i] + c0[j]);
        }
    }

    return diff;

    // let result = Array(grid.length).fill(0).map(() => Array(grid[0].length).fill(0));
    // for (let i = 0; i < grid.length; i++) {
    //     for (let l = 0; l < grid[0].length; l++) {

    //         let r1 = 0, r0 = 0, c1 = 0, c0 = 0;
    //         for (let j = 0; j < grid[0].length; j++) {
    //             if (grid[i][j]) c1++;
    //             else c0++;
    //         }
    //         for (let k = 0; k < grid.length; k++) {
    //             if (grid[k][l]) r1++;
    //             else r0++;
    //         }
    //         result[i][l] = r1 + c1 - r0 - c0
    //     }
    // }
    // return result;
};

// O/p: O(n^2)