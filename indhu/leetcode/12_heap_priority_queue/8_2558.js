// https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function (gifts, k) {
    console.log(gifts.length);
    for (let i = 0; i < k; i++) {
        // gifts.sort((a, b) => b - a);
        // use Math.max instead of sort
        gifts[0] = Math.floor(Math.sqrt(gifts[0]))
    }
    return gifts.reduce((a, b) => a + b, 0)
};

const result = pickGifts([25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78, 56, 8, 5, 8, 7, 68, 4, 25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78, 56, 8, 5, 8, 7, 68, 4, 25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78, 56, 8, 5, 8, 7, 68, 4, 25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78, 56, 8, 5, 8, 7, 68, 4, 25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78, 56, 8, 5, 8, 7, 68, 4, 25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78, 56, 8, 5, 8, 7, 68, 4, 25, 64, 9, 4, 100, 34, 234, 234, 52, 34, 5, 34, 52, 3, 5, 234, 5, 24, 79, 7, 8, 5, 678, 5, 768, 56, 8, 6, 78, 78], 4)
console.log(result);

// Observation:
// output Time Complexity : O(n^2)
