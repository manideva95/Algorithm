// https://leetcode.com/problems/row-with-maximum-ones/

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let max = 0;
    let ans = [0, 0]
    for (let i = 0; i < mat.length; i++) {
        let count = 0
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                count++
            }
        }
        if (max < count) {
            max = count;
            ans[0] = i; ans[1] = count;
        }
    }
    return ans;
};

const result = rowAndMaximumOnes([[1, 3], [2, 2]])
console.log(result);

// Observation:
// output Time Complexity : O(n)