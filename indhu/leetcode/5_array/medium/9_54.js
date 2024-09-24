// https://leetcode.com/problems/spiral-matrix/description/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let endC = matrix[0].length - 1, endR = matrix.length - 1, startR = 0, startC = 0;
    const result = [];

    while (endC >= startC && endR >= startR) {

        for (let i = startC; i <= endC; i++) {
            result.push(matrix[startR][i])
        }
        startR++

        for (let i = startR; i <= endR; i++) {
            result.push(matrix[i][endC])
        }
        endC--
        if (endR >= startR) {
            for (let i = endC; i >= startC; i--) {
                result.push(matrix[endR][i])
            }
        }
        endR--
        if (endC >= startC) {
            for (let i = endR; i >= startR; i--) {
                result.push(matrix[i][startC])
            }
        }
        startC++
    }
    return result
};

const result = spiralOrder([[1, 2, 3], [5, 6, 7], [9, 10, 11], [12, 13, 15]])
console.log(result);