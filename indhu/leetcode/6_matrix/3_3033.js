// https://leetcode.com/problems/modify-the-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == -1) {
                let k = 0;
                let largest = 0;
                while (k < matrix.length) {
                    if (matrix[k][j] > largest) largest = matrix[k][j];
                    k++;
                }
                matrix[i][j] = largest
            }
        }
    }
    return matrix
};

const result = modifiedMatrix([[1, 2, -1], [4, -1, 6], [7, 8, 9]])
console.log(result);

// Observation:
// output Time Complexity : O(n log n)