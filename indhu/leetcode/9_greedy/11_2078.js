// https://leetcode.com/problems/two-furthest-houses-with-different-colors/description/

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    if (colors[0] !== colors[colors.length - 1]) return colors.length - 1
    let max = 0;
    for (let i = 0; i < colors.length; i++) {
        let count = 0;
        if (colors[i - 1] !== colors[i]) {
            for (let j = 0; j < colors.length; j++) {
                if (i !== j && colors[i] !== colors[j]) {
                    count = j - i
                }
            }
            max = Math.max(max, count);
        }
    }
    return max
};

const result = maxDistance([1, 8, 6, 8, 6, 1, 6, 8])
console.log(result);

// Observation:
// output Time Complexity : O(n)