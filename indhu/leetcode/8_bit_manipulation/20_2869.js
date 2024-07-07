// https://leetcode.com/problems/minimum-operations-to-collect-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let collection = new Set()
    let numOfOps = 0

    while (collection.size !== k) {
        let pop = nums.pop()
        if (pop <= k) {
            collection.add(pop)
        }
        numOfOps += 1
    }
    return numOfOps
};

const result = minOperations([3, 1, 5, 4, 2, 6, 8, 9], 6)
console.log(result);

// Observation:
// output Time Complexity : O(n)