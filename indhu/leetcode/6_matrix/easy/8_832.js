// https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
        let j = 0;
        let k = image[0].length - 1;
        while (j <= k) {
            if (j == k) {
                image[i][j] === 0 ? image[i][j] = 1 : image[i][j] = 0;
                break
            }
            image[i][j] === 0 ? image[i][j] = 1 : image[i][j] = 0;
            image[i][k] === 0 ? image[i][k] = 1 : image[i][k] = 0;
            j++;
            k--;
        }
    }
    return image
};

const result = flipAndInvertImage([[1], [0]])
console.log(result);

// Observation:
// output Time Complexity : O(n)