// https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
    let similar = true;
    let target;
    for (let i = 0; i < mat.length && similar; i++) {
        for (let j = 0; j < mat[0].length && similar; j++) {
            target = (j + k) % mat[i].length;
            similar = mat[i][j] == mat[i][target];
        }
    }
    return similar;
};
const result = areSimilar([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 4)
console.log(result);

// Observation:
// output Time Complexity : O(n)