// https://leetcode.com/problems/image-smoother/

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let smoother = [...Array(img.length)].map(_ => Array(img[0].length).fill(0));
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            smoother[i][j] = averageOfMatrix(img, i, j)
        }
    }
    return smoother
};

const averageOfMatrix = (img, x, y) => {
    let i = x === 0 ? 0 : x - 1;
    let sum = 0; let count = 0;
    for (i; i <= (x === (img.length - 1) ? x : x + 1); i++) {
        let j = y === 0 ? 0 : y - 1;
        for (j; j <= (y === (img[0].length - 1) ? y : y + 1); j++) {
            sum = sum + img[i][j]
            count++
        }
    }
    return Math.floor(sum / count)
}

const result = imageSmoother([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])
console.log(result);

// Observation:
// output Time Complexity : O(n)