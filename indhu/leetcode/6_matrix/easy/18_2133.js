// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    let map = new Map()
    Array.from({ length: matrix[0].length }, (_, i) => i + 1).forEach(item => map.set(item, 0))
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let val = map.get(matrix[i][j]);
            if (val !== undefined) { map.set(matrix[i][j], ++val) }
            else return false
            if (val !== (i + 1)) return false
        }
    };
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let val = map.get(matrix[j][i])
            if (val) { map.set(matrix[j][i], ++val) }
            else return false
            if (val !== (i + matrix.length + 1)) return false
        }
    };
    return true
};

const result = checkValid([[1, 1, 1], [1, 2, 3], [1, 2, 3]])
console.log(result);

// Observation:
// output Time Complexity : O(n)