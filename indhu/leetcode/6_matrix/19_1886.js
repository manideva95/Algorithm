// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
    if (isValid(mat, target)) return true;
    for (let l = 1; l < 4; l++) {
        mat = rotate90(mat);
        if (isValid(mat, target)) {
            return true
        }
    }
    return false
};

const rotate90 = (arr) => {
    let rotate = [];
    for (let i = 0; i < arr[0].length; i++) {
        let row = [];
        for (let j = 0; j < arr.length; j++) {
            row.push(arr[j][i])
        }
        rotate.push(row.reverse())
    }
    return rotate
}

const isValid = (mat, target) => {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] !== target[i][j]) return false
        }
    }
    return true
}

const result = findRotation([[0, 0, 0], [0, 1, 0], [1, 1, 1]], [[1, 1, 1], [0, 1, 0], [0, 0, 0]])
console.log(result);

// Observation:
// output Time Complexity : O(n)