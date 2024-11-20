/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
    let result = new Array(mat.length).fill().map(() => Array(mat[0].length).fill(0))
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            result[i][j] = sum(mat, k, i, j)
        }
    }
    return result
};

const sum = (mat, k, r, c) => {
    let sum = 0;
    let i = r - k >= 0 ? r - k : 0;
    let maxr = r + k >= mat.length ? mat.length - 1 : r + k;

    for (i; i <= maxr; i++) {
        let j = c - k >= 0 ? c - k : 0;
        let maxc = c + k >= mat[0].length ? mat[0].length - 1 : c + k;
        for (j; j <= maxc; j++) {
            console.log(i, j, c, r, maxr, maxc);
            sum += mat[i][j];
        }
    }
    console.log(sum)
    return sum
}
console.log(matrixBlockSum([[1], [2], [3]], 1))