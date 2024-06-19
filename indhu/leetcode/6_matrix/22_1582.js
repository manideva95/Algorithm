// https://leetcode.com/problems/special-positions-in-a-binary-matrix/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let count = 0;
    for (let i = 0; i < mat.length; i++) {
        let colCheck;
        let rowCheck; let index
        for (let j = 0; j < mat[0].length; j++) {
            if (rowCheck && mat[i][j] === 1) {
                rowCheck = false; break
            } else if (mat[i][j] === 1) {
                rowCheck = true;
                index = j
            }
        }
        if (rowCheck) {
            for (let j = 0; j < mat.length; j++) {
                if (colCheck && mat[j][index] === 1) {
                    colCheck = false; break
                } else if (mat[j][index] === 1) colCheck = true
            }
        }
        if (rowCheck && colCheck) count++
    }
    return count
};

const result = numSpecial([[1, 0, 0], [0, 1, 0],])
console.log(result);

// Observation:
// output Time Complexity : O(n)