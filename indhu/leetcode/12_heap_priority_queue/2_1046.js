// https://leetcode.com/problems/last-stone-weight/description/

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    if (stones.length === 1) return stones[0];
    let i = stones.length
    while (i > 1) {
        stones.sort((a, b) => b - a);
        if (stones[0] === stones[1]) {
            stones.shift(); stones.shift();
        } else {
            stones[1] = stones[0] - stones[1];
            stones.shift()
        }
        i = stones.length;
    }
    return stones
};

const result = lastStoneWeight([2, 7, 4, 1, 8, 1, 34, 24, 23, 324, 245, 567, 745, 896, 678, 674, 46, 234, 234, 234, 235, 35, 342, 323, 45, 45, 56, 67, 43, 34])
console.log(result);

// Observation:
// output Time Complexity : O(n)