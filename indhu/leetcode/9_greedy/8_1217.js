// https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/description/

/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let evenCount = 0;
    let oddCount = 0;

    for (const pos of position) {
        if (pos % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return Math.min(oddCount, evenCount);
};



const result = minCostToMoveChips([2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 7, 7, 7, 8, 8, 8, 1, 1, 1])
console.log(result);

// Observation:
// output Time Complexity : O(n)