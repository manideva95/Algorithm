// https://leetcode.com/problems/lucky-numbers-in-a-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let map = [];
    for (let i = 0; i < matrix.length; i++) {
        let minVal = matrix[i][0]; let ind = 0;
        for (let j = 1; j < matrix[0].length; j++) {
            if (minVal > matrix[i][j]) {
                minVal = matrix[i][j];
                ind = j
            }
        }
        console.log(minVal, ind);
        let isMax = true;
        for (let j = 0; j < matrix.length; j++) {
            if (minVal < matrix[j][ind]) {
                isMax = false;
                break
            }
        }
        if (isMax) map.push(minVal)
    }
    return map;
};

const result = luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 11, 12], [9, 3, 8, 7]])
console.log(result);

// Observation:
// output Time Complexity : O(n)