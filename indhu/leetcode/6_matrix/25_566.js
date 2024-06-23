// https://leetcode.com/problems/reshape-the-matrix/
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if ((mat.length * mat[0].length) !== (r * c)) return mat;
    let result = [];
    let row = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            row.push(mat[i][j]);
            if (row.length === c) {
                result.push(row);
                row = []
            }
        }
    }
    return result
};

const result = matrixReshape([[1, 2, 3], [3, 4, 3]], 6, 1)
console.log(result);

// Observation:
// output Time Complexity : O(n)