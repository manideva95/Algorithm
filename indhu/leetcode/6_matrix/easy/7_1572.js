// https://leetcode.com/problems/matrix-diagonal-sum/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    // let result = 0;
    // for (let i = 0; i < mat.length; i++) {
    //     for (let j = 0; j < mat[0].length; j++) {
    //         if (i == j || (i + j == mat[0].length - 1 && i !== j)) result = result + mat[i][j]
    //     }
    // }
    // return result

    // Alernate
    let t = 0, n = mat.length
    for (let i = 0; i < n; i++) {
        t += mat[i][i] + mat[i][n - i - 1]
    }
    return n % 2 ? t - mat[n / 2 | 0][n / 2 | 0] : t
};

const result = diagonalSum([[5, 1], [6, 1]])
console.log(result);

// Observation:
// output Time Complexity : O(n)