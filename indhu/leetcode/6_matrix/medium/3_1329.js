// https://leetcode.com/problems/sort-the-matrix-diagonally/description/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function (mat) {
    let m = mat[0].length, n = mat.length
    for (let k = 0; k < m; k++) {
        let diagonal = [];
        let i = k; j = 0;
        while (i < m && j < n) {
            diagonal.push(mat[j][i])
            i++; j++;
        }
        i--; j--;
        diagonal.sort((a, b) => a - b);
        while (i >= 0 && j >= 0) {
            mat[j][i] = diagonal.pop();
            i--; j--;
        }
    }

    for (let k = 1; k < n; k++) {
        let diagonal = [];
        let i = k; j = 0;
        while (i < n && j < m) {
            diagonal.push(mat[i][j])
            i++; j++;
        }
        i--; j--;
        diagonal.sort((a, b) => a - b);
        while (i >= 0 && j >= 0) {
            mat[i][j] = diagonal.pop();
            i--; j--;
        }
    }
    return mat
};

const result = diagonalSort([[3, 3, 1, 1], [2, 2, 1, 2], [1, 1, 1, 2]]);
console.log(result);