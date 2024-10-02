// https://leetcode.com/problems/arithmetic-subarrays/description/

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    const result = []
    for (let i = 0; i < l.length; i++) {
        let diff, isValid = true
        let sort = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b);
        for (let j = 0; j < sort.length - 1; j++) {
            if (diff == undefined) {
                diff = Math.abs(sort[j] - sort[j + 1]);
            } else if (Math.abs(sort[j] - sort[j + 1]) !== diff) {
                isValid = false
                break
            }
        }
        result.push(isValid)
    }
    return result;
};