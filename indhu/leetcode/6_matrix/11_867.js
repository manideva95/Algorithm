// https://leetcode.com/problems/transpose-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let result = []
    for (let i = 0; i < matrix[0].length; i++) {
        let j = 0; let col = []
        while (j < matrix.length) {
            col.push(matrix[j][i]); j++;
        }
        result.push(col)
    }
    return result
};

const result = transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9], [7, 8, 9]]);
console.log(result);

// Observation:
// output Time Complexity : O(n)