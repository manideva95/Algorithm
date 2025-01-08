// https://leetcode.com/problems/find-a-peak-element-ii/description/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function (mat) {
    let mid = Math.floor((mat.length - 1) / 2);
    return maxLength(mat, mid)
};

const maxLength = (mat, row) => {
    let max = mat[row][0], ind = 0
    for (let i = 1; i < mat[0].length; i++) {
        if (max < mat[row][i]) {
            max = mat[row][i];
            ind = i
        }
    }
    let maxTemp = max, i = row
    if (mat[row - 1] && mat[row - 1][ind] > max) {
        i = row - 1, maxTemp = mat[row - 1][ind]
    } else if (mat[row + 1] && mat[row + 1][ind] > max) {
        i = row + 1, maxTemp = mat[row + 1][ind]
    }
    if (maxTemp > max) {
        return maxLength(mat, i)
    } else {
        return [row, ind]
    }
}
